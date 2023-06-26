import Card from "react-bootstrap/Card";

import Avatar from "../assets/img/ellipse.svg";

export default function Testimoni() {
  const test = [
    {
      tittle: "Amazing people",
      text: "They are people who are not only following the tasks, but can work as a team. Together.",
      condition: "true",
    },
    {
      tittle: "Amazing people",
      text: "They are people who are not only following the tasks, but can work as a team. Together.",
      condition: "false",
    },
    {
      tittle: "Amazing people",
      text: "They are people who are not only following the tasks, but can work as a team. Together.",
      condition: "false",
    },
    {
      tittle: "Partnership approach",
      text: "We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.",
      condition: "true",
    },
    {
      tittle: "Amazing people",
      text: "They are people who are not only following the tasks, but can work as a team. Together.",
      condition: "false",
    },
  ];

  return (
    <div id="testi">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <p className="small fw-light text-center text-black-50">
              Testimonials
            </p>
            <h5 className="display-6 text-center fw-bold">
              What clients love in working <br /> with Albatech Team
            </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          {test.map((item, index) => {
            if (item.condition === "true") {
              return (
                <div key={index} className="col-lg-6 px-5 py-3">
                  <Card className="border-0 bg-transparent">
                    <Card.Body>
                      <Card.Title className="display-6 fw-bold shadow-fw">
                        {item.tittle}
                      </Card.Title>
                      <Card.Text className="h4 fw-light">
                        "{item.text}"
                      </Card.Text>
                    </Card.Body>
                    <div className="d-flex pt-2">
                      <Card.Img
                        className="ava ms-3 mb-3"
                        variant="top"
                        src={Avatar}
                      />
                      <div className="ps-3">
                        <p className="my-0">Matthijs Piëst</p>
                        <p className="text-dark-50 fw-light small my-0">
                          COO at WieBetaaltWat
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            }
            <div class="w-100"></div>;
            return (
              <div key={index} className="col-lg-6 px-5 py-3">
                <Card className="border-0 bg-transparent">
                  <Card.Body>
                    <Card.Title className="h5 fw-bold shadow-fw">
                      {item.tittle}
                    </Card.Title>
                    <Card.Text className="small fw-light">
                      "{item.text}"
                    </Card.Text>
                  </Card.Body>
                  <div className="ps-3 pt-2">
                    <p className="my-0">Matthijs Piëst</p>
                    <p className="text-dark-50 fw-light small my-0">
                      COO at WieBetaaltWat
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
