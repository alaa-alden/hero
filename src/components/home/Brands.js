import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useHistory } from "react-router-dom";
import { handleToSearch } from '../../functions'
const optionBrandSlider = {
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class="left-arrow-client" aria-hidden="true"></i>',
    '<i class="right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 5,
    },
  },
};
export default function Brands() {
  let history = useHistory();
  return (
    <section id="brands" className="brands">
      <OwlCarousel className="brand-slider owl-theme" {...optionBrandSlider}>
        <div className="brand-item">
          <img
            src="img/brand1.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand2.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand1.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
        <div className="brand-item">
          <img
            src="img/brand3.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand4.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand3.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
        <div className="brand-item">
          <img
            src="img/brand5.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand6.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand5.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
        <div className="brand-item">
          <img
            src="img/brand7.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand8.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand7.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
        <div className="brand-item">
          <img
            src="img/brand9.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand8.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand7.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
        <div className="brand-item">
          <img
            src="img/brand9.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand8.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
          <img
            src="img/brand7.png"
            alt=""
            width={100}
            onClick={() =>
              handleToSearch(
                "",
                "https://jsonplaceholder.typicode.com/photos",
                history
              )
            }
          />
        </div>
      </OwlCarousel>
      <style jsx="true">
        {`
          .brand-slider img {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
}
