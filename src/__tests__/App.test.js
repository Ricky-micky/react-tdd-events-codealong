import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here


// import { render, screen } from "@testing-library/react";
// import App from "../App";

import '@testing-library/jest-dom';

// Code tests here

test ('renders a header and a paragraph', () => {

    render (<App />)

    // test header 
    const pageHeader = screen.getByText (/Lorem Ipsum/)

});