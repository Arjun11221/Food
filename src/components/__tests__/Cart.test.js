import { fireEvent, render, screen } from "@testing-library/react";
const { act } = require("react-dom/test-utils");
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/MenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render RestaurantMenu onto the page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accHeader = screen.getByText("Veg Pizza (9)");

  fireEvent.click(accHeader);

  const foodItems = screen.getAllByTestId("food");

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 Items )")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 Items )")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

  expect(screen.getByText("Cart is Empty!! Eat something and Cart...")).toBeInTheDocument();

});
