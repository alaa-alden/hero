import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import $ from "jquery";
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  const SideNavLinks = document.getElementsByClassName("sideNavLinks");
  for (let i = 0; i < SideNavLinks.length; i++) {
    SideNavLinks[i].style.transition = `right 1.${i * 2}s ease-in-out 0.5s`;
    SideNavLinks[i].style.right = "2%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  const SideNavLinks = document.getElementsByClassName("sideNavLinks");
  for (let i = 0; i < SideNavLinks.length; i++) {
    SideNavLinks[i].style.transition = `right 0.6s ease`;
    SideNavLinks[i].style.right = "-110%";
  }
}

export default function Header() {
  const history = useHistory();
  const [active, setActive] = useState({
    home: false,
    latest: false,
    shop: false,
    about: false,
    contact: false,
  });
  const listenPage = () => {
    switch (history.location.pathname) {
      case "/latest":
        setActive({
          home: false,
          latest: true,
          shop: false,
          about: false,
          contact: false,
        });
        break;
      case "/shop":
        setActive({
          home: false,
          latest: false,
          shop: true,
          about: false,
          contact: false,
        });
        break;
      case "/about":
        setActive({
          home: false,
          latest: false,
          shop: false,
          about: true,
          contact: false,
        });
        break;
      case "/contact":
        setActive({
          home: false,
          latest: false,
          shop: false,
          about: false,
          contact: true,
        });
        break;
      case "/":
        setActive({
          home: true,
          latest: false,
          shop: false,
          about: false,
          contact: false,
        });
        break;
      default:
        break;
    }
  };
  history.listen(() => {
    listenPage();
  });
  useEffect(() => {
    listenPage();
    // $("body").scrollspy({
    //   target: ".bs-example-js-navbar-scrollspy",
    //   offset: 50,
    // });
    // $("#mainmenu-area").sticky({
    //   topSpacing: 0,
    // });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".scrolltop:hidden").stop(true, true).fadeIn();
      } else {
        $(".scrolltop").stop(true, true).fadeOut();
      }
    });
    $(function () {
      $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
        return false;
      });
    });
    return () => {
      setActive(false);
    };
  }, []);
  return (
    <>
      <div className="top" />
      <div className="scrolltop">
        <div className="scroll icon">
          <i className="fa fa-angle-up" aria-hidden="true" />
        </div>
      </div>
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-none d-lg-block d-md-block">
              <div className="text-left">Welcome To Cadeau Boutique</div>
            </div>
            <div className="col-lg-6 col-md-6 cl-12">
              <ul className="d-flex justify-content-end top-bars mr-5 pr-5">
                <li className="dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    CLR
                    <i className="fa fa-angle-down ml-2" />
                  </div>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      US
                    </a>
                  </div>
                </li>
                <li className="ml-1 dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    LAN
                    <i className="fa fa-angle-down ml-2" />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="mainmenu-area-sticky-wrapper" className="sticky-wrapper">
        <div className="mainmenu-area" id="mainmenu-area">
          <div className="mainmenu-area-bg" />
          <div className="second-nav navbar">
            <div className="container-fluid">
              <div className="w-100">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-4">
                    <div className="float-left">
                      <Link to="/" className="d-flex align-items-center">
                        <img
                          src="img/logo.png"
                          alt=""
                          width={80}
                          className="d-none d-lg-block"
                        />
                        <i className="d-none d-lg-block slogan">
                          Express how you feel
                        </i>
                        <img
                          src="img/logo.png"
                          alt=""
                          width={80}
                          className="d-block d-lg-none"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-4">
                    <nav className="d-lg-block d-none">
                      <ul className="nav-ul d-lg-flex justify-content-between mr-5 ml-5 d-none ">
                        <Link to="/">
                          <li
                            className={
                              active.home ? "nav-link active" : "nav-link"
                            }
                          >
                            Home
                          </li>
                        </Link>
                        <Link to="/latest">
                          <li
                            className={
                              active.latest ? "nav-link active" : "nav-link"
                            }
                          >
                            Latest
                          </li>
                        </Link>
                        <Link to="/shop">
                          <li
                            className={
                              active.shop ? "nav-link active" : "nav-link"
                            }
                          >
                            Shop
                          </li>
                        </Link>
                        <Link to="/about">
                          <li
                            className={
                              active.about ? "nav-link active" : "nav-link"
                            }
                          >
                            About
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li
                            className={
                              active.contact ? "nav-link active" : "nav-link"
                            }
                          >
                            Contact
                          </li>
                        </Link>
                      </ul>
                    </nav>
                    <ul
                      className="d-lg-none d-flex right-links mb-0"
                      style={{ justifyContent: "center", padding: "8px 0" }}
                    >
                      <li className="cart">
                        <Link to="/test">
                          <img src="img/shopping-bag.svg" alt="" width={20} />
                        </Link>
                        <div className="total">0</div>
                      </li>
                      <li>
                        <a href="search.html">
                          <img
                            src="img/search-interface-symbol.svg"
                            alt=""
                            width={16}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-2 col-4">
                    <ul
                      className="d-none d-lg-flex right-links mb-0"
                      style={{ justifyContent: "flex-end", padding: "8px 0" }}
                    >
                      <li className="cart">
                        <Link to="/test">
                          <img src="img/shopping-bag.svg" alt="" width={25} />
                        </Link>
                        <div className="total">0</div>
                      </li>
                      <li>
                        <a href="search.html">
                          <img
                            src="img/search-interface-symbol.svg"
                            alt=""
                            width={25}
                          />
                        </a>
                      </li>
                    </ul>
                    <div
                      className="d-lg-none d-flex text-right"
                      style={{ height: "100%", alignItems: "center" }}
                    >
                      <button
                        className="navTrigger d-md-block d-lg-none btn"
                        type="button"
                        onClick={openNav}
                      >
                        <li className="fas fa-stream"></li>
                      </button>
                    </div>
                    <div id="mySidenav" className="sidenav">
                      <a className="closebtn" onClick={closeNav}>
                        ×
                      </a>
                      <Link to="/" className="sideNavLinks" onClick={closeNav}>
                        Home
                      </Link>
                      <Link to="#" className="sideNavLinks" onClick={closeNav}>
                        Latest
                      </Link>
                      <Link to="#" className="sideNavLinks" onClick={closeNav}>
                        Shop
                      </Link>
                      <Link
                        to="/about"
                        className="sideNavLinks"
                        onClick={closeNav}
                      >
                        About
                      </Link>
                      <Link to="#" className="sideNavLinks" onClick={closeNav}>
                        Conact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
