import { Link } from "react-router-dom";

export default function Navbar() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#111",
        color: "white"
      }}
    >
      <Link style={linkStyle} to="/">My Portfolio</Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => scrollTo("programming")}>3D Modeling</button>
        <button onClick={() => scrollTo("design")}>Design</button>
        <button onClick={() => scrollTo("games")}>Game Dev</button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};