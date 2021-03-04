export default function Scan() {
  return (
    <section className="scan pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 d-lg-block d-md-block d-none">
            <div className="scan-wrap ">
              <div className="try"></div>
              <div className="row">
                <div className="col-sm-3">
                  <img src="img/female.png" alt="" width="100%" />
                </div>
                <div className="col-sm-6">
                  <div className="text-center text-gray">
                    <h4>Now you can send your gift with your favorite song</h4>
                    <h1>SCAN</h1>
                    <button className="btn more">MORE</button>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="qr-code">
                    <img src="img/qr.svg" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-lg-none d-md-none d-block "></div>
          <div className="col-10 d-lg-none d-md-none d-block">
            <div className="scan-wrap  pt-5 pl-3 pr-3">
              <div className="try"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="text-center text-gray pt-5 pb-3">
                    <h4>Now you can send your gift with your favorite song</h4>
                    <h1>Scan</h1>
                    <button className="btn more">MORE</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="qr-code">
                    <img src="img/qr.svg" alt="" width={200} />
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <img src="img/female.png" alt="" width={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
