import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Line from "../assets/img/line.svg";

export default function Hero() {
  return (
    <div id="hero" className="mt-5 py-5">
      <div className="container my-5 py-5">
        <div className="row py-4">
          <div className="col-lg-10">
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <div>
                  <h1 className="fw-bold display-2 shadow-fw">
                    Build or scale up
                  </h1>
                  <h1 className="display-2 shadow-fw">your development team</h1>
                  <div className="d-flex pt-5 pb-3">
                    <img src={Line} />
                    <p className="my-auto ps-3">in weeks, not months</p>
                  </div>
                </div>
                <Button variant="warning" className="px-5 py-3 rounded-pill">
                  Book now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
