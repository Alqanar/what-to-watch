import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

import MainPage from "../main-page/main-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import withAuthorizationState from "../../hocs/with-authorization-state.jsx";
import FavouritePage from "../favourite-page/favourite-page.jsx";
import {Operation} from "../../reducer/authorization/authorization.js";
import {getGenresList} from "../../reducer/movie/selectors.js";
import composedWithPrivateRoute from "../../hocs/with-private-route.jsx";
import {
  featuredFilm
} from "../../mocks/mock-data.js";


const SignInPageWrapped = withAuthorizationState(SignInPage);
const FavouritePageWrapped = composedWithPrivateRoute(FavouritePage);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._getMovieCard = this._getMovieCard.bind(this);
    this._renderMainPage = this._renderMainPage.bind(this);
    this._renderSignInPage = this._renderSignInPage.bind(this);
    this._renderFavouritePage = this._renderFavouritePage.bind(this);
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact render={this._renderMainPage} />
        <Route path="/login" render={this._renderSignInPage} />
        <Route path="/favorites" render={this._renderFavouritePage} />
      </Switch>
    );
  }

  _getMovieCard(movieCard) {
    return movieCard;
  }

  _renderFavouritePage() {
    const {
      avatarLink,
      userId
    } = this.props;

    return (
      <FavouritePageWrapped
        avatarLink={avatarLink}
        isAuth={Boolean(userId)}
        onClick={this._getMovieCard}
      />
    );
  }

  _renderMainPage() {
    const {
      avatarLink,
      userId,
      genresList
    } = this.props;

    return (
      <MainPage
        avatarLink={avatarLink}
        featuredFilm={featuredFilm}
        genres={genresList}
        onClick={this._getMovieCard}
        isAuth={Boolean(userId)}
      />
    );
  }

  _renderSignInPage({history}) {
    const {signIn} = this.props;

    return (
      <SignInPageWrapped
        onSignInButtonClick={signIn}
        history={history}
      />
    );
  }
}

App.propTypes = {
  signIn: PropTypes.func.isRequired,
  avatarLink: PropTypes.string.isRequired,
  userId: PropTypes.number,
  genresList: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, pass) => dispatch(Operation.requestAuthorization(email, pass)),
});

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  avatarLink: state.authorization.user.avatarUrl,
  userId: state.authorization.user.id,
  genresList: getGenresList(state)
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
