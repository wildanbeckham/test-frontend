export default function Icon() {
  const icon = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];

  return (
    <div id="icon">
      <div className="container py-5">
        <div className="row pembungkus">
          {icon.map((item) => (
            <div key={item} className="col-lg-2 text-center py-3">
              <img src={"/images/icon2/icon" + item + ".svg"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
