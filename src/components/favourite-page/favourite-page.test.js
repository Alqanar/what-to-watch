import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import FavouritePage from "./favourite-page.tsx";


const moviesListMock = [
    {
        id: `0`,
        name: `The Aftermath`,
        posterLink: `https://st.kp.yandex.net/images/film_iphone/iphone360_1000125.jpg`,
        trailer: `https://youtu.be/FPv3e2FZOgo`
    },
    {
        id: `1`,
        name: `The Professor and the Madman`,
        posterLink: `https://st.kp.yandex.net/images/film_iphone/iphone360_996027.jpg`,
        trailer: `https://youtu.be/ESYU-bkmxuI`
    },
    {
        id: `2`,
        name: `Five Feet Apart`,
        posterLink: `https://st.kp.yandex.net/images/film_iphone/iphone360_1151373.jpg`,
        trailer: `https://youtu.be/XtgCqMZofqM`
    }
];

const testInitialState = {
    movie: {
        genre: `All genres`,
        films: moviesListMock
    }
};

it(`Favourite page correctly renders`, () => {
    const tree = renderer
        .create(
            <Provider store={createStore(() => testInitialState)}>
                <BrowserRouter>
                    <FavouritePage
                        avatarLink='img/avatar.jpg'
                        isAuth={false}
                    />
                </BrowserRouter>
            </Provider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});