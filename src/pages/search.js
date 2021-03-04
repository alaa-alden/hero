import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import faker from "faker";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Search({ location }) {
  const data = location.state.data;
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };
  return (
    <section className="search-sec pt-5 pb-5">
      <div className="container-fluid">
        <div className="row" dir="rtl">
          <div className="col-lg-4 col-md-4">
            <div className="hook">
              <div className="new-filter ads text-right">
                <div className="filter-wrap-mini pb-3 product-border">
                  <div className="filter-item pt-3 pb-1">
                    <div className="pl-3">
                      <button className="btn">وصل مؤخرا</button>
                    </div>
                  </div>
                  <div className="filter-item pb-1">
                    <button className="btn">الحقائب</button>
                    <div className="d-flex flex-column pr-3">
                      <button className="btn d-flex justify-content-between">
                        <div>الجميع</div>
                        <div>22</div>
                      </button>
                      <button className="btn d-flex justify-content-between">
                        <div>جديد</div>
                        <div>12</div>
                      </button>
                    </div>
                  </div>
                  <div className="filter-item">
                    <button className="btn">الساعات</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">المجوهرات</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">الشوكولا</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">الألعاب</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">الأدوات المنزلية</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">الكترونيات</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">ملابس</button>
                  </div>
                  <div className="filter-item">
                    <button className="btn">نظارات</button>
                  </div>
                </div>
                <div className="filter-wrap-mini product-border pb-3 pt-3">
                  <h5 className="pr-2 pb-2">اللون</h5>
                  <div className="color pr-2">
                    <input
                      type="radio"
                      name="color"
                      id="red"
                      defaultValue="red"
                    />
                    <label htmlFor="red" className="mr-0">
                      <span className="red" />
                    </label>
                    <input type="radio" name="color" id="green" />
                    <label htmlFor="green">
                      <span className="green" />
                    </label>
                    <input type="radio" name="color" id="yellow" />
                    <label htmlFor="yellow">
                      <span className="yellow" />
                    </label>
                  </div>
                </div>
                <div className="filter-wrap-mini product-border pt-3">
                  <h5 className="pr-2 pb-2">البراند</h5>
                  <div className="color pr-2">
                    <div className="filter-item">
                      <button className="btn">مكتبة جرير</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">تويز أر أص</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">فيرجين</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">اكسترا</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">لازوردي</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">أنوش</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">فلاورد</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">باتشي</button>
                    </div>
                    <div className="filter-item">
                      <button className="btn">حدائق السلطان</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row pt-4 product-border pb-3 mb-3" dir="rtl">
              <div className="col-2 text-right">التصنيفات</div>
              <div className="col-10 text-left">
                <select defaultValue={0} className="select-wrap">
                  <option value="Best-Selling" data-track="Sort:Best Selling">
                    الأكثر مبيعا
                  </option>
                  <option
                    value="Price-Low-To-High"
                    data-track="Sort:Price Low to High"
                  >
                    الأعلى سعر
                  </option>
                  <option
                    value="Price-High-To-Low"
                    data-track="Sort:Price High to Low"
                  >
                    الأقل سعر
                  </option>
                </select>
              </div>
            </div>
            <InfiniteScroll
              className="row"
              dataLength={current.length}
              next={getMoreData}
              hasMore={hasMore}
              loader={<div className="loading">تحميل ....</div>}
            >
              {current &&
                current.map((item, index) => (
                  <div key={item.id} className="col-sm-6 col-md-4 col-6">
                    <Link to="product">
                      <div className="product pb-2">
                        <img src={item.url} alt="" width="100%" />
                        <div className="pro-name text-right pr-2 pl-2 pt-3">
                          {item.title}
                        </div>
                        <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                          <button className="add btn">أضف للسلة</button>
                          <div className="price">500$</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
/*
<div className="col-sm-6 col-md-4 col-6">
                <a href="product.html">
                  <div className="product pb-2">
                    <img
                      src="./img/source/lazurde/l1.jpeg"
                      alt=""
                      width="100%"
                    />
                    <div className="pro-name text-right pr-2 pl-2 pt-3">
                      مجوهرات
                    </div>
                    <div className="d-flex mt-3 mb-2 pr-2 pl-2">
                      <button className="add btn">أضف للسلة</button>
                      <div className="price">500$</div>
                    </div>
                  </div>
                </a>
              </div>

*/
/*
 // const data = new Array(20).fill().map((value, id) => ({
  //   id: id,
  //   title: faker.lorem.words(5),
  //   url: faker.image.business(),
  // }));
*/
/*
const initSearch = () => {
    // let data = "";
    // if (location.state) {
    //   data = location.state.data;
    //   if (data !== "undefinded") console.log(data);
    // }
    // console.log(typeof data);
    // if (typeof data !== "object")
    //   return (
    //     <div className="col-sm-6 col-md-4 col-6">
    //       <a href="product.html">
    //         <div className="product pb-2">
    //           <img src="./img/source/lazurde/l1.jpeg" alt="" width="100%" />
    //           <div className="pro-name text-right pr-2 pl-2 pt-3">مجوهرات</div>
    //           <div className="d-flex mt-3 mb-2 pr-2 pl-2">
    //             <button className="add btn">أضف للسلة</button>
    //             <div className="price">500$</div>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //   );
    // else {
    //   const ProductList = data.map((item) => (
    //     <li className="col-sm-6 col-md-4 col-6" key={item.id}>
    //       <a href="product.html">
    //         <div className="product pb-2">
    //           <img src={item.thumbnailUrl} alt="" width="100%" />
    //           <div className="pro-name text-right pr-2 pl-2 pt-3">
    //             {item.title}
    //           </div>
    //           <div className="d-flex mt-3 mb-2 pr-2 pl-2">
    //             <button className="add btn">أضف للسلة</button>
    //             <div className="price">500$</div>
    //           </div>
    //         </div>
    //       </a>
    //     </li>
    //   ));
    //   const subProdutList=ProductList.slice(1,10)
    //   return (subProdutList);
    // }
  };
  */
