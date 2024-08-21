import './Navbar.css';
import { MdMenu } from "react-icons/md";
import Visit from './Visit/Visit';

const Navbar = () => {
  const myFunction = () => {
    const resNav = document.querySelector('.resNavStyle');
    resNav.classList.toggle('active');
  }

  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <h1>VILLA</h1>
        </div>
        <div className="url">
          <ul className="menu">
            <li><a className="menuItem color" href="#">Home</a></li>
            <li><a className="menuItem" href="#">Properties</a></li>
            <li><a className="menuItem" href="#">Property Details</a></li>
            <li><a className="menuItem" href="#">Contact Us</a></li>
            <li>
              <Visit />
            </li>
          </ul>
              <button className="icon" onClick={myFunction}>
                <MdMenu size={'30px'} />
              </button>
        </div>
      </nav>
      <div className="resNavStyle">
      <ul className="menu">
            <li><a className="menuItem" href="#">Home</a></li>
            <li><a className="menuItem" href="#">Properties</a></li>
            <li><a className="menuItem" href="#">Property Details</a></li>
            <li><a className="menuItem" href="#">Contact Us</a></li>
            <li>
              <Visit />
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar;
