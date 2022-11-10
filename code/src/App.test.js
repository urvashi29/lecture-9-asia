import React from "react";
import App from "./App";
import { render, cleanup } from '@testing-library/react';

//snapshot testing

describe('Take a snapshot', () => {
    afterEach(cleanup);

    it('should take snpashot', () => {
        // act
        const { asFragment } = render(<App />).get;

        //assertions
        expect(asFragment(<App />)).toMatchSnapshot();
    })

})
