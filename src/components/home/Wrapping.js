export default function Wrapping() {
  return (
    <section className="wrapping pt-4">
      <div className="container-fluid">
        <div className="row">
         
          <div className="col-6">
            <div className="ml-5 main-title text-left">
              <h1 className="m-0">Wrapping</h1>
            </div>
          </div>
           <div className="col-6">
            <button className="mr-5 more btn">More</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-6">
              <div className="product pb-2">
                <img src="./img/wrap1.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
              <div className="product pb-2">
                <img src="./img/wrap2.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              {" "}
              <div className="product pb-2">
                <img src="./img/wrap3.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>{" "}
              <div className="product pb-2">
                <img src="./img/wrap4.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <div className="product pb-2">
                <img src="./img/wrap5.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
              <div className="product pb-2">
                <img src="./img/wrap6.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <div className="product pb-2">
                <img src="./img/wrap7.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
              <div className="product pb-2">
                <img src="./img/wrap8.png" alt="" width="100%" />
                <div className="pro-name text-left pr-2 pl-2 pt-3">Wap</div>
                <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                  <div className="price">200$</div>
                  <button className="add btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}