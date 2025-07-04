
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>AziCode</h1>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <NavLink to="/" style={navLinkStyle} activeStyle={activeLinkStyle} end>
                Home
              </NavLink>
            </li>
            <li style={navItemStyle}>
              <NavLink to="/products" style={navLinkStyle} activeStyle={activeLinkStyle}>
                Products
              </NavLink>
            </li>
            <li style={navItemStyle}>
              <NavLink to="/services" style={navLinkStyle} activeStyle={activeLinkStyle}>
                Services
              </NavLink>
            </li>
            <li style={navItemStyle}>
              <NavLink to="/about" style={navLinkStyle} activeStyle={activeLinkStyle}>
                About
              </NavLink>
            </li>
            <li style={navItemStyle}>
              <NavLink to="/contact" style={navLinkStyle} activeStyle={activeLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <NavLink to="/NewProduct" className="btn btn-success">
            new Product
          </NavLink>
        </div>
      </header>
    </>
  );
}

// Styles JS

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  backgroundColor: "#007bff",
  color: "white",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.8rem",
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
};

const navItemStyle = {};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.1rem",
};

const activeLinkStyle = {
  textDecoration: "underline",
  fontWeight: "700",
};

const buttonStyle = {
  backgroundColor: "white",
  border: "none",
  color: "#007bff",
  padding: "0.5rem 1.2rem",
  borderRadius: "0.3rem",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "1rem",
  transition: "background-color 0.3s ease",
};

