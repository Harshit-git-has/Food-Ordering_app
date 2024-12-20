import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
// import cartItems from "cartItems";
import "@testing-library/jest-dom";



it("should render Header component with the login button",() => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
    );

     const loginButton= screen.getByRole("button");

     expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a cart items 0  button",() => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    //  const cartItems= screen.getByRole("cartItems");

     expect(cartItems).toBeInTheDocument();
});