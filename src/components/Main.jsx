import { Link, Routes, Route } from "react-router-dom";
import "../styles/main.css";
import Users from "./UsersPage/Users";
import Moduls from "./ModulPage/Moduls";
import Other from "./Other";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  //Delete toket, navigate to LoginPage
  const exit = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="flexwrapper">
        <div className="sidebar">
          <ul>
            <Link to={"/"}>
              <li>Users</li>
            </Link>
            <Link to={"moduls"}>
              <li>Modules</li>
            </Link>
            <Link to={"other"}>
              {" "}
              <li>Other</li>
            </Link>
            <li className="exit_btn" onClick={() => exit()}>
              Exit
            </li>
          </ul>
        </div>
        <div className="infobar">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="moduls" element={<Moduls />} />
            <Route path="Other" element={<Other />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Main;
