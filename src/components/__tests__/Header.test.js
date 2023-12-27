import { fireEvent, render , screen} from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should render header Login button onto the page" , ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByText("Login");
    const loginBtn = screen.getByRole("button" , {name : "Login"});

    expect(loginBtn).toBeInTheDocument();
});


it("Should render header with cart 0 items onto the page" , ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartBtn = screen.getByText(/Cart/);

    expect(cartBtn).toBeInTheDocument();
});

it("Should change login button to logout on click" , ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button" , {name : "Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name : "Logout"});

    expect(logoutBtn).toBeInTheDocument();
});