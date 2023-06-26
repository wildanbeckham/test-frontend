import logo from "../assets/img/alba-logo.svg";

export default function Footer() {
  const footer = [
    { nav: "About" },
    { nav: "Service" },
    { nav: "Portfolio" },
    { nav: "Blog" },
    { nav: "Career" },
  ];

  return (
    <div id="footer" className="container py-5">
      <div className="row py-5 border-4 border-top border-bottom border-dark-50">
        <div className="col-md-5">
          <img src={logo} className="w-25" />
          <p className="pt-4">
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>
        </div>
        <div className="col-3 ps-0 ">
          <ul>
            {footer.map((item, index) => (
              <li className="py-2" key={index}>
                <a href="#!">{item.nav}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <p>
            The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
            Kota Tangerang, Banten 15143
          </p>
          <p>P : +62 81 1889 3383</p>
          <p>E : info@albatech.id</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-black-50 mb-0 mt-4">
            ©PT. Alba Digital Teknologi 2021 | All Rights Reserved
          </p>
        </div>
        <div className="col-6">
          <div className="d-flex mb-5 mt-4">
            <a href="#!" className="ms-auto">
              Privacy policy{" "}
            </a>
            <p className="px-2">|</p>
            <a href="#!"> Terms of service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
