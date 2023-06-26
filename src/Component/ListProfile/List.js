import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function IndexList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    const confirm = window.confirm("Yakin ingin menhaspus ini?");
    if (confirm) {
      axios
        .delete("http://localhost:3001/data/" + id)
        .then((res) => {
          navigate("/list-proflie");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg">
          <Table
            striped
            responsive
            size="lg"
            className="shadow border border-2"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Year</th>
                <th>Color</th>
                <th>Pantone Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td style={{ backgroundColor: item.color }}>{item.color}</td>
                  <td>{item.pantone_value}</td>
                  <td>
                    <Link
                      to={`/list-proflie/read/${item.id}`}
                      className="btn btn-primary me-2"
                    >
                      View
                    </Link>
                    <Button
                      className="text-decoration-none btn btn-sm btn-danger mx-1"
                      onClick={(e) => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
