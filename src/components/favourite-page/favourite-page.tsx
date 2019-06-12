import * as React from "react";

import Sprite from "../sprite/sprite";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {Film} from "../../types";


interface IProps {
    avatarLink: string;
    isAuth: boolean;
    onClick: () => Film;
}

const FavouritePage: React.FC<IProps> = (props): React.ReactElement => {
    const {
        avatarLink,
        isAuth,
        onClick,
    } = props;

    return (
    <>
      <Sprite />
      <div className="user-page">
          <header className="page-header user-page__head">
              <Logo
                  hrefLink='/'
              />
              <h1 className="page-title user-page__title">My list</h1>
              <UserBlock
                  avatarLink={avatarLink}
                  isAuth={isAuth}
              />
          </header>
          <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>
              <MoviesList
                  onClick={onClick}
                  isMainPage={false}
              />
          </section>
          <Footer
              hrefLink='/'
          />
      </div>
    </>
    );
};

export default FavouritePage;