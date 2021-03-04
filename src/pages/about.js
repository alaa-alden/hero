import axios from "axios";
import Hero from "../components/Hero";
import Select from "../components/Select";
export default function About() {
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.text);
    // axios.post('http://localhost:4000/api/test').then((data)=>{
    // console.log(data)
    // })
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Hero
            type="sex"
            placeholder="choose your sex"
            onChange={(value) =>
              console.log(
                `from about page take data from hero component1 ${value}`
              )
            }
          />
        </div>
        <div className="col-6">
          <Hero
            type="age"
            placeholder="choose your age"
            onChange={(value) =>
              console.log(
                `from about page take data from hero component1 ${value}`
              )
            }
          />
        </div>
      </div>
      <div>
        <div className="col-6">
          <Hero
            type="occasion"
            placeholder="choose your occasion"
            onChange={(value) =>
              console.log(
                `from about page take data from hero component1 ${value}`
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
