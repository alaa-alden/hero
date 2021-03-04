import React from 'react'

export default function checkout() {
    return (
      <section className="checkout mt-3 pt-2 pb-5">
        <div className="container-fluid">
          <div className="row" dir="rtl">
            <div className="col-lg-8 col-md-6">
              <div className="payment-info text-center p-4">
                <h4>معلومات التوصيل</h4>
                <form action className="text-center">
                  <div className="row mt-5">
                    <div className="col-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="الاسم الأول "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="الاسم الأخير "
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder=" رقم الهاتف" required />
                  </div>
                  <div className="pickup mt-4">
                    <h4 className="pb-3">العنوان</h4>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className style={{ display: "block" }}>
                          <div className="form-group">
                            <input type="text" placeholder="المنطقة" required />
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="الشارع" required />
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="البناء" />
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="الطابق" />
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="رقم المنزل" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment">
                    <h5 className="pb-4">رقم الكوبون</h5>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-7">
                          <input type="text" placeholder="أدخل رقم الكوبون  " />
                        </div>
                        <div className="col-sm-5 add-margin">
                          <button
                            className="btn fav w-100"
                            style={{
                              borderRadius: "4px",
                              lineHeight: "unset",
                              boxShadow: "unset",
                              padding: "4px 0",
                            }}
                          >
                            تأكيد
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-right">
                      <button
                        className="btn mt-3 fav"
                        style={{ width: "100%" }}
                      >
                        العودة إلى المنتجات
                      </button>
                    </div>
                    <div className="col-6 text-left">
                      <button
                        className="btn mt-3 add"
                        style={{ width: "100%" }}
                      >
                        شراء
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ads text-center pt-3">
                <h4>السلة</h4>
                <div className="products-horizontal product-border mt-3 p-3">
                  <div className="row">
                    <div className="col-lg-3 col-md-5 col-3 back-image">
                      <img src="img/watch-pro.png" alt="" width="100%" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-5">
                      <div className="pro-title text-center">
                        <h6>ساعة يد</h6>
                        <div className="number mb-3">
                          <span className="minus">-</span>
                          <input type="text" defaultValue={1} />
                          <span className="plus">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-4">
                      <div
                        className="d-flex flex-column text-center"
                        style={{ justifyContent: "center" }}
                      >
                        <div className="price" style={{ fontSize: "14px" }}>
                          200 $
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="remove">
                            <button className="btn p-0 text-righ mt-2">
                              <img
                                src="img/delete-gray.svg"
                                alt=""
                                width={16}
                              />
                            </button>
                          </div>
                          <div className="gift">
                            <button className="btn p-0 text-righ mt-2">
                              <img src="img/gift-box.svg" alt="" width={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-horizontal product-border mt-3 p-3">
                  <div className="row">
                    <div className="col-lg-3 col-md-5 col-3 back-image">
                      <img src="img/bear.png" alt="" width="100%" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-5">
                      <div className="pro-title text-center">
                        <h6>العاب</h6>
                        <div className="number mb-3">
                          <span className="minus">-</span>
                          <input type="text" defaultValue={1} />
                          <span className="plus">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-4">
                      <div
                        className="d-flex flex-column text-center"
                        style={{ justifyContent: "center" }}
                      >
                        <div className="price" style={{ fontSize: "14px" }}>
                          200 $
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="remove">
                            <button className="btn p-0 text-righ mt-2">
                              <img
                                src="img/delete-gray.svg"
                                alt=""
                                width={16}
                              />
                            </button>
                          </div>
                          <div className="gift">
                            <button className="btn p-0 text-righ mt-2">
                              <img src="img/gift-box.svg" alt="" width={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-table p-3 mr-2 ml-2">
                  <div className="row pb-1" dir="rtl">
                    <div className="col-6 text-right">المنتجات</div>
                    <div className="col-6 text-left">2</div>
                  </div>
                  <div className="row pb-1" dir="rtl">
                    <div className="col-6 text-right">السعر</div>
                    <div className="col-6 text-left">200 $</div>
                  </div>
                  <div className="row pb-1" dir="rtl">
                    <div className="col-6 text-right">التغليف</div>
                    <div className="col-6 text-left">200 $</div>
                  </div>
                  <div className="row cart-table-border pb-3" dir="rtl">
                    <div className="col-6 text-right">الضرائب</div>
                    <div className="col-6 text-left">100 $</div>
                  </div>
                  <div className="row pb-1 pt-2" dir="rtl">
                    <div className="col-6 text-right">المجموع الكلي</div>
                    <div className="col-6 text-left">500 $</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
