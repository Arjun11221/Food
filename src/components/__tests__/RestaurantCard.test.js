import { render ,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom"

it("should render the card onto the page" , ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
})