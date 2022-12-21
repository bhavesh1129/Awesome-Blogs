import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
         <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">{c.name}
              </Link>))
            }
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-linkedin"></i>
          <i className="topIcon fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
}
