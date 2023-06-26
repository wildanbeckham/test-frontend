import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import imgPorto from "../assets/img/card-porto.svg";

export default function Portofolio() {
  const porto = [
    {
      tipe: "Mobile Apps",
      tittle: "ILIOS app (B2B E-commerce)",
      text: "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
    },
    {
      tipe: "Website Developer",
      tittle: "Home and Living",
      text: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living. ",
    },
    {
      tipe: "Website Developer",
      tittle: "HIPPO",
      text: "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment. ",
    },
  ];

  return (
    <div id="porto">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <p className="small fw-light text-center text-black-50">
              Portofolio
            </p>
            <h5 className="display-6 text-center fw-bold">
              The software that we build <br /> takes our clients to the next
              level
            </h5>
          </div>
        </div>
        <div className="row pt-3">
          {porto.map((item) => (
            <div key={item.tittle} className="col-lg-4 py-3 ">
              <Card className="rounded-4">
                <Card.Img variant="top" src={imgPorto} />
                <Card.Body className="col-package">
                  <Card.Title>
                    <p className="small fw-light text-black-50">{item.tipe}</p>
                    <h5 className="text-warning">{item.tittle} </h5>
                  </Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <a href="#!" className="stretched-link"></a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="row pt-4">
          <div className="col text-center">
            <Button variant="warning" className="px-5 py-3 rounded-pill">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
