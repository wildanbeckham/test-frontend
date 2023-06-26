import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer";
import List from "../../Component/ListProfile/List";
import NavList from "../../Component/ListProfile/NavList";
import { useEffect } from "react";

export default function IndexList() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);

  return (
    <>
      <NavList />
      <List />
      <Footer />
    </>
  );
}
