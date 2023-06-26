import Card from "react-bootstrap/Card";

export default function Package() {
  const icon = [
    {
      iconImg: "icon1",
      text: "High-performance website to reach out more your potential customers",
      tittle: "Website development",
    },
    {
      iconImg: "icon2",
      text: "To accelerate your business process",
      tittle: "Mobile apps development ",
    },
    {
      iconImg: "icon3",
      text: "Complete digital product creations from UX prototyping to final UI designs",
      tittle: "Digital product design ",
    },
    {
      iconImg: "icon4",
      text: "Make sure your digital environment keep online and updated",
      tittle: "Maintenance ",
    },
    {
      iconImg: "icon5",
      text: "You can update your website content yourself",
      tittle: "CMS development ",
    },
    {
      iconImg: "icon6",
      text: "Simplify the payment system with just one step",
      tittle: "Integrated payment gateway ",
    },
  ];

  return (
    <div id="package">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <p className="small fw-light text-center text-black-50">
              Complete Package
            </p>
            <h5 className="display-6 text-center fw-bold shadow-fw">
              From product design to software continuous delivery
            </h5>
          </div>
        </div>
        <div className="row">
          {icon.map((item) => (
            <div key={item.tittle} className="col-lg-4 py-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  className="icon-img mx-3 mt-3"
                  src={"/images/icon/" + item.iconImg + ".svg"}
                />
                <Card.Body className="col-package">
                  <Card.Title className="text-warning d-flex">
                    {item.tittle}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="22"
                      fill="currentColor"
                      className="bi bi-arrow-right icon-package d-none ms-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <a href="#!" className="stretched-link"></a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
