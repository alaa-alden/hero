export default function Footer() {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-wrap">
                  <img src="img/logo.png" alt="" width={100} />
                  <p className="mt-2 mb-0">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-wrap">
                  <h3>Explore</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Spical</a>
                    </li>
                    <li>
                      <a href="#">Latest</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-wrap">
                  <h3>Call US</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker mr-2"></i>
                        Location
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope mr-2"></i>
                        email@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone mr-2"></i>
                        999 999 999
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="footer-wrap">
                  <h3>Newsletter</h3>
                  <form action="#" className="new-form">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit" className="btn more">
                      Subscibe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy pt-2 pb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-6 text-left">
              <p className="mb-0">ALL RIGHT RESERVED 2021</p>
            </div>
            <div className="col-md-6 col-6">
              <ul className="d-flex  justify-content-end social-bottom">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
