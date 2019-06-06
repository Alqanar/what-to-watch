import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Sprite from "../sprite/sprite.jsx";
import Logo from "../logo/logo.jsx";
import Footer from "../footer/footer.jsx";


const SignInPage = (props) => {
  const {
    email,
    pass,
    onEmailInputChange,
    onPassInputChange,
    onSignInButtonClick,
    isErrorEmail,
    isErrorPass
  } = props;

  return (
    <Fragment>
      <Sprite />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo
            hrefLink='/'
          />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className={`sign-in__field ${isErrorEmail ? `sign-in__field--error` : ``}`}>
                <input
                  onChange={onEmailInputChange}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  value={email}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${isErrorPass ? `sign-in__field--error` : ``}`}>
                <input
                  onChange={onPassInputChange}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  value={pass}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                onClick={onSignInButtonClick}
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer
          hrefLink='/'
        />
      </div>
    </Fragment>
  );
};

SignInPage.propTypes = {
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  onEmailInputChange: PropTypes.func.isRequired,
  onPassInputChange: PropTypes.func.isRequired,
  onSignInButtonClick: PropTypes.func.isRequired,
  isErrorEmail: PropTypes.bool.isRequired,
  isErrorPass: PropTypes.bool.isRequired
};

export default SignInPage;
