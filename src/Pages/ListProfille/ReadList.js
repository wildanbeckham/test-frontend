import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useParams } from "react-router-dom";

export default function IndexList() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/data/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <div className="row d-flex vh-100 justify-content-center align-items-center">
        <div className="col-lg">
          <Table striped size="lg" className="shadow border border-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Color</th>
                <th>Pantone Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.year}</td>
                <td style={{ backgroundColor: data.color }}>{data.color}</td>
                <td>{data.pantone_value}</td>
                <td>
                  <Link to={"/list-proflie"} className="btn btn-danger">
                    Back
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
