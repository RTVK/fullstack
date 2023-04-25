import "./topbar.scss";
//import { Person, Mail } from "@material-ui/icons";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          North ⭐
          </a>
          <div className="itemContainer">
            <PersonIcon  />
            <span>+91 9662840495</span>
          </div>
          <div className="itemContainer">
            <MailIcon />
            <span>garvit.on@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
