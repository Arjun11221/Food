import { fireEvent, render , screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/MockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render resList after searching for burger is 4", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const totalCards = screen.getAllByTestId("res-card");

  expect(totalCards.length).toBe(20);

  const inputBox = screen.getByPlaceholderText("Search for restaurant and food");

  fireEvent.change(inputBox , {target : {value : "burger"}});

  const searchBtn = screen.getByRole("button", {name : "Search"});

  fireEvent.click(searchBtn);

  const searchCards = screen.getAllByTestId("res-card");

  expect(searchCards.length).toBe(2);

});

it("Should render Top Rated Restaurant Cards after clicking the Button", async () => {

    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const totalCards = screen.getAllByTestId("res-card");
  
    expect(totalCards.length).toBe(20);

    const filteredBtn = screen.getByTestId("filter");

    fireEvent.click(filteredBtn);

    const filterCards = screen.getAllByTestId("res-card");

    expect(filterCards.length).toBe(17);
  
  });
