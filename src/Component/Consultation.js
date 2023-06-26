import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Consultation() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <Card className="text-center bg-warning border border-3 rounded-5 pt-5 pb-4 shadow border-dark">
            <Card.Body>
              <Card.Text className="h5">
                Is software important for your business?
              </Card.Text>
              <Card.Title className="display-5">
                Build it with Albatech
              </Card.Title>
              <Button
                variant="outline-dark"
                className="px-5 py-3 mt-4 rounded-pill border border-3 border-dark"
              >
                Consultation Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
