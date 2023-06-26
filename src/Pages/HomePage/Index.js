import Hero from "../../Component/Hero";
import Icon from "../../Component/Icon";
import Navbar from "../../Component/Navbar";
import Package from "../../Component/Package";
import Portofolio from "../../Component/Portofolio";
import Progress from "../../Component/Progress";
import Swiper from "../../Component/Swiper";
import Testimoni from "../../Component/Testimoni";
import Consultation from "../../Component/Consultation";
import Footer from "../../Component/Footer";

import "../HomePage/style.css";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Package />
      <Icon />
      <Progress />
      <Portofolio />
      <Testimoni />
      <Swiper />
      <Consultation />
      <Footer />
    </>
  );
}
