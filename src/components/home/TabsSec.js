import { useEffect } from "react";

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
export default function TabsSec() {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <section className="tabs-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="tab">
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "London")}
                id="defaultOpen"
              >
                Latest
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "Paris")}
              >
                Top Seller
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "Tokyo")}
              >
                Latest
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "Special")}
              >
                Speical
              </button>
            </div>
            <div id="London" className="tabcontent">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/neckless.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Neckless
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/watch-pro.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Watch
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">320$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/flower.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Flower
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">600$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <div className="pro-image">
                      <img src="./img/box.png" alt="" width="100%" />
                      <div className="new">New</div>
                    </div>
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Chocolate
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Paris" className="tabcontent">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/neckless.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Neckless
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/watch-pro.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Watch
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">320$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/flower.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Flower
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">600$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <div className="pro-image">
                      <img src="./img/box.png" alt="" width="100%" />
                      <div className="new">New</div>
                    </div>
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Chocolate
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Tokyo" className="tabcontent">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/neckless.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Neckless
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <button className="add btn">Add To Cart</button>
                      <div className="price">200$</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/watch-pro.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Watch
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">320$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/flower.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Flower
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">600$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <div className="pro-image">
                      <img src="./img/box.png" alt="" width="100%" />
                      <div className="new">New</div>
                    </div>
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Chocolate
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Special" className="tabcontent">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/neckless.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Neckless
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <img src="./img/watch-pro.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Watch
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">320$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                      <img src="./img/flower.png" alt="" width="100%" />
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Flower
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">600$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                  <div className="product pb-2">
                    <div className="pro-image">
                      <img src="./img/box.png" alt="" width="100%" />
                      <div className="new">New</div>
                    </div>
                    <div className="pro-name text-left pr-2 pl-2 pt-3">
                      Chocolate
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <div className="price">200$</div>
                      <button className="add btn">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
