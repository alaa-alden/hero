import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const optionCatSlider = {
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class=" left-arrow-client" aria-hidden="true"></i>',
    '<i class=" right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 5,
    },

    1366: {
      items: 9,
    },
  },
};
export default function Category() {
  return (
    <section className="category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main-title">
              <h1 className="text-center">Occasions</h1>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-block d-md-none">
          <div className=" col-lg-12 d-flex justify-content-between">
            <div className="cat-item text-center">
              <img src="img/occasions/cake.png" alt="" />
              <h5 className="mt-3">Birthday</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Baby</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Valentine's</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/wedding-rings.png" alt="" />
              <h5 className="mt-3">Wedding</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/christmas.png" alt="" />
              <h5 className="mt-3">Christmas</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/graduation.png" alt="" />
              <h5 className="mt-3">Graduation</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Holidays </h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Others</h5>
            </div>
          </div>
        </div>
        <div className="row d-none d-sm-flex d-lg-none d-md-flex">
          <div className="col-3">
            <div className="cat-item text-center">
              <img src="img/occasions/cake.png" alt="" />
              <h5 className="mt-3">Birthday</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Baby</h5>
            </div>
          </div>
          <div className="col-3">
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Valentine's</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/wedding-rings.png" alt="" />
              <h5 className="mt-3">Wedding</h5>
            </div>
          </div>
          <div className="col-3">
            <div className="cat-item text-center">
              <img src="img/occasions/christmas.png" alt="" />
              <h5 className="mt-3">Christmas</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/graduation.png" alt="" />
              <h5 className="mt-3">Graduation</h5>
            </div>
          </div>
          <div className="col-3">
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Holidays </h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Others</h5>
            </div>
          </div>
        </div>
        <div className="row d-flex d-block d-sm-none d-lg-none d-md-none">
          <div className="col-6">
            <div className="cat-item text-center">
              <img src="img/occasions/cake.png" alt="" />
              <h5 className="mt-3">Birthday</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Baby</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/valentine.png" alt="" />
              <h5 className="mt-3">Valentine's</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/wedding-rings.png" alt="" />
              <h5 className="mt-3">Wedding</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="cat-item text-center">
              <img src="img/occasions/christmas.png" alt="" />
              <h5 className="mt-3">Christmas</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/graduation.png" alt="" />
              <h5 className="mt-3">Graduation</h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Holidays </h5>
            </div>
            <div className="cat-item text-center">
              <img src="img/occasions/holidays.png" alt="" />
              <h5 className="mt-3">Others</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
