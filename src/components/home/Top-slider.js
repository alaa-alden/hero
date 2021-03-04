import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputRange from "react-input-range";
import { useForm } from "react-hook-form";
import { handleToSearch } from "../../functions";
import "../../styles/react-input-range.css";
import Hero from "../Hero";
export default function TopSlider() {
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState({ min: 50, max: 75 });
  const [sex, setSex] = useState();
  const [occasion, setOccasion] = useState();
  const [age, setAge] = useState();
  let history = useHistory();
  const onSubmit = (data) => {
    handleToSearch(
      { ...data, price },
      "https://jsonplaceholder.typicode.com/photos",
      history
    );
  };
  return (
    <section className="top-slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-text text-left">
              <h4>BUY YOUR GIFT NOW.....</h4>
              <h1>very simply with CADEAU BOUTIQUE</h1>
              <img
                src="img/h2.png"
                alt=""
                width={600}
                className="mb-5"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="filter">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="filter-wrap pt-5">
                      <div className="d-flex">
                        <img src="img/gift-box.png" alt="" width={100} />
                        <div className="pt-5 ml-2">
                          <h6 className="m-0">Do You Need Help?</h6>
                          <h4 className="m-0">Find A Gift</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group text-left">
                      <label htmlFor="sex">Gender</label>
                      <Hero
                        type="gender"
                        placeholder="Choose Gender"
                        onChange={(value) => {
                          console.log(
                            `from about page take data from hero component1 ${value}`
                          );
                          setSex(value);
                        }}
                      />
                    </div>
                    <div className="form-group text-left">
                      <label htmlFor="occasion">Occasions</label>
                      <Hero
                        type="occasion"
                        placeholder="Choose Occasions"
                        onChange={(value) => {
                          console.log(
                            `from about page take data from hero component1 ${value}`
                          );
                          setOccasion(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group text-left">
                      <label htmlFor="age">Age</label>
                      <Hero
                        type="age"
                        placeholder="Choose Age"
                        onChange={(value) => {
                          console.log(
                            `from about page take data from hero component1 ${value}`
                          );
                          setAge(value);
                        }}
                      />
                    </div>
                    <div className="form-group text-left">
                      <label htmlFor="age">Relationship</label>
                      <Hero
                        type="relationship"
                        placeholder="Choose Relationship"
                        onChange={(value) => {
                          console.log(
                            `from about page take data from hero component1 ${value}`
                          );
                          setAge(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group text-left">
                      <label htmlFor="price">Price</label>
                      <div className="container">
                        <div className="row mt-3 " dir="ltr">
                          <InputRange
                            formatLabel={(value) => `${value}$`}
                            name="price"
                            id="price"
                            minValue={5}
                            maxValue={100}
                            value={price}
                            onChange={(value) => setPrice(value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-5">
                      <button type="submit" className="btn mt-4 submit">
                        Find
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
