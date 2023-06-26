export default function Progress() {
  const prog = [
    { total: "1000+", name: "Designs" },
    { total: "30+", name: "Products" },
    { total: "58+", name: "Website Developments" },
  ];

  return (
    <div id="progress" className="bg-dark">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="text-warning">
              Our Progress Comes with a Collaboration Between Creativity, Ideas,
              and Technology
            </h2>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          {prog.map((item) => (
            <div key={item.total} className="col-lg-4 text-white text-center">
              <h1>{item.total}</h1>
              <h4 className="fw-light">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
