import { Link } from 'react-router-dom';
import facebook from '/images/facebook.svg';
import twitter from '/images/twitter.svg';
import linkedin from '/images/linkedin.svg';
import appleStore from '/images/apple-store.svg';
import googleStore from '/images/google.svg';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
        <div className={styles.footer__content}>
            <div className="row align-items-top">
              <div className="col-12 col-sm-12 col-md-3">
              <h5 className={styles.footer__title}>
                  About
                </h5>

              <div className={styles.footer__entry}>
                  <p>
                    Here you can find interesting ads and easily contact the seller. If you want to buy something - you can find attractive offers at lower prices in the store. If you want to sell something - you can add an ad easily and for free and sell just about anything you want. Buy and sell at DailySale!
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-2">
              <h5 className={styles.footer__title}>
                  Our Service
                </h5>

              <ul className={`${styles.list} list-links`}>
                  <li>
                    {/* <Link to='team'> */}
                      Our Team
                    {/* </Link> */}
                  </li>

                  <li>
                    {/* <Link to='/contacts'> */}
                      Contact Us
                    {/* </Link> */}
                  </li>

                  <li>
                    {/* <Link to='/about'> */}
                      About
                    {/* </Link> */}
                  </li>


                  <li>
                    {/* <Link to='team'> */}
                      Services
                    {/* </Link> */}
                  </li>

                  <li>
                    {/* <Link to='/privacy-policy'> */}
                      Privacy Policy
                    {/* </Link> */}
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-12 col-md-3">
              <h5 className={styles.footer__title}>
                  Contact
                </h5>

                <ul className="list list-contacts">
                  <li>
                    <a href="https://www.google.com/maps/place/DNG+Phibsboro+Estate+Agents/@53.3625151,-6.274653,17z/data=!3m1!4b1!4m5!3m4!1s0x48670dd621ccca75:0xe6a1b46fcedf7daa!8m2!3d53.3625119!4d-6.2724643">
                      <i className="material-icons">location_on</i>

                      <span>
                        Bulgaria
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="mailto:emil_georgiev_it@abv.bg">
                      <i className="material-icons">email</i>

                      <span>
                        emilgeorgievit@gmail.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+353833617736">
                      <i className="material-icons">phone</i>

                      <span>
                        08888888888
                      </span>
                    </a>
                  </li>
                </ul>

                <ul className="list d-flex list-socials">
                  <li>
                    <a href="https://www.facebook.com/emil.georgiev.it">
                      <img src={facebook} alt="facebook" width='35' height='35' />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.twitter.com/">
                      <img src={twitter} alt="twitter" width='35' height='35' />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/emil-georgiev-b5464bb9/">
                      <img src={linkedin} alt="linkedin" width='35' height='35' />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-4 col-sm-12">
              <h5 className={styles.footer__title}>
                  Subscribe
                </h5>

              <h5 className={`mt-3 ${styles.footer__title}`}>
                  Mobile apps
                </h5>

                <ul className="list list-mobile-apps d-flex align-items-center justify-content-center">
                  <li>
                    <a href="https://www.apple.com/ie/ios/app-store/">
                      <img src={appleStore} alt="apple-store" />
                    </a>
                  </li>

                  <li>
                    <a href="https://store.google.com/">
                      <img src={googleStore} alt="google-store" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <p className={styles.copyright}>
              Copyright &copy; {new Date().getFullYear()}


              <a className={styles.credentials} href="https://emilgeorgiev.000webhostapp.com/">
                Developed by

                Emil Georgiev
              </a>

              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}