import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Menna<span>.</span>
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        </li>

        <li>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;