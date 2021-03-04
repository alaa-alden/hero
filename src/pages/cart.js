import React from "react";

export default function cart() {
  return (
    <section className="cart-sec pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="hook">
              <div className="add-wrap w-100 mb-3 mt-2 p-3 ads text-center">
                <h5>إضافة تغليف لجميع المشتريات</h5>
                <div
                  className="new-slider owl-carousel owl-loaded owl-drag"
                  dir="ltr"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-827px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "3310px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap2.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap4.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap3.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap1.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap2.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap4.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap3.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "393.75px", marginRight: "20px" }}
                      >
                        <div className="new-slide-item">
                          <img src="img/wrap1.png" alt="" width="100%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <i className="left-arrow-client" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <i className="right-arrow-client" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                  </div>
                </div>
                <div className="options" dir="rtl">
                  <div className="option-item mb-2 form-group d-flex w-100 justify-content-between">
                    <label htmlFor> اختر حجم التغليف</label>
                    <div className="color">
                      <input
                        type="radio"
                        name="size"
                        id="large"
                        defaultValue="red"
                      />
                      <label htmlFor="large" className="mr-0">
                        <span className="round">L</span>
                      </label>
                      <input type="radio" name="size" id="med" />
                      <label htmlFor="med">
                        <span className="round">M</span>
                      </label>
                      <input type="radio" name="size" id="small" />
                      <label htmlFor="small">
                        <span className="round">S</span>
                      </label>
                    </div>
                  </div>
                  <div className="option-item mb-2 form-group d-flex w-100 justify-content-between">
                    <label htmlFor> اختر لون التغليف</label>
                    <div className="color">
                      <input
                        type="radio"
                        name="new"
                        id="one"
                        defaultValue="red"
                      />
                      <label htmlFor="one" className="mr-0">
                        <span className="red" />
                      </label>
                      <input type="radio" name="new" id="two" />
                      <label htmlFor="two">
                        <span className="green" />
                      </label>
                      <input type="radio" name="new" id="three" />
                      <label htmlFor="three">
                        <span className="yellow" />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn add"
                    style={{
                      fontSize: "1rem !important",
                      lineHeight: "30px !important",
                    }}
                  >
                    أضف التغليف
                  </button>
                </div>
              </div>
              <div className="ads text-center pt-3 pb-3">
                <h4>معلومات السلة</h4>
                <div className="cart-table p-3 mr-2 ml-2">
                  <div className="row pb-1" dir="rtl">
                    <div className="col-6 text-right">المنتجات</div>
                    <div className="col-6 text-left">2</div>
                  </div>
                  <div className="row pb-1" dir="rtl">
                    <div className="col-6 text-right">السعر</div>
                    <div className="col-6 text-left">200 $</div>
                  </div>
                  <div className="row cart-table-border pb-3" dir="rtl">
                    <div className="col-6 text-right">الضرائب</div>
                    <div className="col-6 text-left">100 $</div>
                  </div>
                  <div className="row pb-1 pt-2" dir="rtl">
                    <div className="col-6 text-right">المجموع الكلي</div>
                    <div className="col-6 text-left">300 $</div>
                  </div>
                </div>
                <div className="mt-3 pb-2">
                  <button className="add btn w-100">
                    <a href="checkout.html"> الاكمال إلى الشراء </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="product-border mt-2 mb-2 pb-3">
              <div className="products-horizontal mt-3 p-3">
                <div className="row" dir="rtl">
                  <div className="col-lg-4 col-md-4 col-12 back-image">
                    <img src="img/source/lazurde/l9.jpeg" alt="" width="100%" />
                  </div>
                  <div className="col-lg-4 col-md-5 col-7">
                    <div className="pro-title text-right pr-1 pt-3 pb-3">
                      <h5 className="pb-2">مجوهرات</h5>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">السعر :</div>
                        <div className="col-6 text-center">1000 $</div>
                      </div>
                      {/* <div class="row pb-1 mb-2" dir="rtl">
                                        <div class="col-6 text-right">
                                            اللون :
                                        </div>
                                        <div class="col-6 text-center">
                                            <div class="color">
                                                <input type="radio" name="" id="" value="" />
                                                <label for="" class="mr-0"><span class="red"></span></label>
            
                                               
            
                                            </div>
                                        </div>
                                    </div> */}
                      {/* <div class="row pb-1 mb-2" dir="rtl">
                                        <div class="col-6 text-right">
                                            الحجم :
                                        </div>
                                        <div class="col-6 text-center">
                                            2
                                        </div>
                                    </div> */}
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">التغليف :</div>
                        <div className="col-6 text-center">لا يوجد</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-5">
                    <div className="rem-wrap pt-3 pb-3 text-center">
                      <button className="btn text-center mb-3">
                        <img src="img/delete-gray.svg" alt="" width={20} />
                      </button>
                      <div className="number mb-3">
                        <span className="minus">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="plus">+</span>
                      </div>
                      <button className="btn add text-center">
                        إضافة تغليف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-border mt-2 mb-2 pb-3">
              <div className="products-horizontal mt-3 p-3">
                <div className="row" dir="rtl">
                  <div className="col-lg-4 col-md-4 col-12 back-image">
                    <img src="img/source/watch-pro.png" alt="" width="100%" />
                  </div>
                  <div className="col-lg-4 col-md-5 col-7">
                    <div className="pro-title text-right pr-1 pt-3 pb-3">
                      <h5 className="pb-2">ساعة يد</h5>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">السعر :</div>
                        <div className="col-6 text-center">400 $</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">اللون :</div>
                        <div className="col-6 text-center">
                          <div className="color">
                            <input type="radio" name id defaultValue />
                            <label htmlFor className="mr-0">
                              <span style={{ backgroundColor: "#5b5b5b" }} />
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div class="row pb-1 mb-2" dir="rtl">
                        <div class="col-6 text-right">الحجم :</div>
                        <div class="col-6 text-center">2</div>
                      </div> */}
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">التغليف :</div>
                        <div className="col-6 text-center">لا يوجد</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-5">
                    <div className="rem-wrap pt-3 pb-3 text-center">
                      <button className="btn text-center mb-3">
                        <img src="img/delete-gray.svg" alt="" width={20} />
                      </button>
                      <div className="number mb-3">
                        <span className="minus">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="plus">+</span>
                      </div>
                      <button className="btn add text-center">
                        إضافة تغليف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-border mt-2 mb-2 pb-3">
              <div className="products-horizontal mt-3 p-3">
                <div className="row" dir="rtl">
                  <div className="col-lg-4 col-md-4 col-12 back-image">
                    <img src="img/source/toysRus/t1.jpeg" alt="" width="100%" />
                  </div>
                  <div className="col-lg-4 col-md-5 col-7">
                    <div className="pro-title text-right pr-1 pt-3 pb-3">
                      <h5 className="pb-2">العاب</h5>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">السعر :</div>
                        <div className="col-6 text-center">500 $</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">اللون :</div>
                        <div className="col-6 text-center">
                          <div className="color">
                            <input type="radio" name id defaultValue />
                            <label htmlFor className="mr-0">
                              <span style={{ backgroundColor: "#f875aa" }} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">الحجم :</div>
                        <div className="col-6 text-center">2</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">التغليف :</div>
                        <div className="col-6 text-center">لا يوجد</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-5">
                    <div className="rem-wrap pt-3 pb-3 text-center">
                      <button className="btn text-center mb-3">
                        <img src="img/delete-gray.svg" alt="" width={20} />
                      </button>
                      <div className="number mb-3">
                        <span className="minus">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="plus">+</span>
                      </div>
                      <button className="btn add text-center">
                        إضافة تغليف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-border mt-2 mb-2 pb-3">
              <div className="products-horizontal mt-3 p-3">
                <div className="row" dir="rtl">
                  <div className="col-lg-4 col-md-4 col-12 back-image">
                    <img
                      src="img/source/sultan garden center/s3.jpeg"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-lg-4 col-md-5 col-7">
                    <div className="pro-title text-right pr-1 pt-3 pb-3">
                      <h5 className="pb-2">أثاث</h5>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">السعر :</div>
                        <div className="col-6 text-center">1500 $</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">اللون :</div>
                        <div className="col-6 text-center">
                          <div className="color">
                            <input type="radio" name id defaultValue />
                            <label htmlFor className="mr-0">
                              <span style={{ backgroundColor: "#c38957" }} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">الحجم :</div>
                        <div className="col-6 text-center">2</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">التغليف :</div>
                        <div className="col-6 text-center">لا يوجد</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-5">
                    <div className="rem-wrap pt-3 pb-3 text-center">
                      <button className="btn text-center mb-3">
                        <img src="img/delete-gray.svg" alt="" width={20} />
                      </button>
                      <div className="number mb-3">
                        <span className="minus">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="plus">+</span>
                      </div>
                      <button className="btn add text-center">
                        إضافة تغليف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-border mt-2 mb-2 pb-3">
              <div className="products-horizontal mt-3 p-3">
                <div className="row" dir="rtl">
                  <div className="col-lg-4 col-md-4 col-12 back-image">
                    <img src="img/source/patchi/p3.jpeg" alt="" width="100%" />
                  </div>
                  <div className="col-lg-4 col-md-5 col-7">
                    <div className="pro-title text-right pr-1 pt-3 pb-3">
                      <h5 className="pb-2">شوكولا</h5>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">السعر :</div>
                        <div className="col-6 text-center">250 $</div>
                      </div>
                      {/* <div class="row pb-1 mb-2" dir="rtl">
                        <div class="col-6 text-right">اللون :</div>
                        <div class="col-6 text-center">
                          <div class="color">
                            <input type="radio" name="" id="" value="" />
                            <label for="" class="mr-0"
                              ><span class="red"></span
                            ></label>
                          </div>
                        </div>
                      </div> */}
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">الحجم :</div>
                        <div className="col-6 text-center">4</div>
                      </div>
                      <div className="row pb-1 mb-2" dir="rtl">
                        <div className="col-6 text-right">التغليف :</div>
                        <div className="col-6 text-center">لا يوجد</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-5">
                    <div className="rem-wrap pt-3 pb-3 text-center">
                      <button className="btn text-center mb-3">
                        <img src="img/delete-gray.svg" alt="" width={20} />
                      </button>
                      <div className="number mb-3">
                        <span className="minus">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="plus">+</span>
                      </div>
                      <button className="btn add text-center">
                        إضافة تغليف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .minus,
          .plus {
            padding: 0 !important;
          }
          .number input {
            height: unset !important;
            font-size: 15px !important;
          }
          .number {
            margin: 0 auto !important;
          }
        `}
      </style>
    </section>
  );
}
