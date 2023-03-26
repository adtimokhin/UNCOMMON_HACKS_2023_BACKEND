import "./NavBarPage.css";
import { NavLink } from "react-router-dom";

function NavBarPage() {
  return (
    <div className="h-screen w-screen bg-black text-[rgba(255,255,255,0.6)] font-medium relative">
      <NavLink
        to={"/"}
        className="absolute text-[rgba(255,255,255,0.8)]  top-0 left-0 text-4xl p-4"
      >
        <p>posterBoard.edu</p>
      </NavLink>
      <div className="absolute top-[50%] left-[50%] w-[40vw] text-6xl" id="ksk">
        <NavLink to={"/events"}>
          <p>Events</p>
        </NavLink>
        <NavLink to={"/about"}>
          <p>About</p>
        </NavLink>
        <NavLink to={"/team"}>
          <p>Team</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBarPage;
