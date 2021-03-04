import { useHistory } from "react-router-dom";
import { handleToSearch } from "../../functions";
export default function Images() {
  let history = useHistory();
  return (
    <section id="section-occasion">
      <section className="images d-lg-block d-md-block d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-9">
              <div className="d-flex">
                <div
                  className="new-wrap"
                  onClick={() =>
                    handleToSearch(
                      "",
                      "https://jsonplaceholder.typicode.com/photos",
                      history
                    )
                  }
                >
                  <img src="img/occasions/g3.png" alt="" width="100%" />
                </div>
                <div
                  className="new-wrap"
                  onClick={() =>
                    handleToSearch(
                      "",
                      "https://jsonplaceholder.typicode.com/photos",
                      history
                    )
                  }
                >
                  <img src="img/occasions/g2.png" alt="" width="100%" />
                </div>
              </div>
              <div
                className="mt-2 new-wrap"
                onClick={() =>
                  handleToSearch(
                    "",
                    "https://jsonplaceholder.typicode.com/photos",
                    history
                  )
                }
              >
                <img src="img/occasions/g4.png" alt="" width="100%" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div
                className="new-wrap h-100"
                onClick={() =>
                  handleToSearch(
                    "",
                    "https://jsonplaceholder.typicode.com/photos",
                    history
                  )
                }
              >
                <img className="h-100" src="img/occasions/g1.png" alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="images d-lg-none d-md-none d-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="new-wrap"
                onClick={() =>
                  handleToSearch(
                    "",
                    "https://jsonplaceholder.typicode.com/photos",
                    history
                  )
                }
              >
                <img src="img/occasions/g2.png" alt="" width="100%" />
              </div>
              <div
                className="new-wrap"
                onClick={() =>
                  handleToSearch(
                    "",
                    "https://jsonplaceholder.typicode.com/photos",
                    history
                  )
                }
              >
                <img src="img/occasions/g3.png" alt="" width="100%" />
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="new-wrap"
                onClick={() =>
                  handleToSearch(
                    "",
                    "https://jsonplaceholder.typicode.com/photos",
                    history
                  )
                }
              >
                <img src="img/occasions/g1.png" alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">
        {`
          .new-wrap img,
          .new-wrap div {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
}
