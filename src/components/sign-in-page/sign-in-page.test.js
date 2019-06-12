import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import SignInPage from "./sign-in-page.tsx";


it(`Sign In page correctly renders`, () => {
    const tree = renderer
        .create(<BrowserRouter>
            <SignInPage
                email=""
                pass=""
                onEmailInputChange={() => {}}
                onPassInputChange={() => {}}
                onSignInButtonClick={() => {}}
                isErrorEmail={false}
                isErrorPass={false}
            />
        </BrowserRouter>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
