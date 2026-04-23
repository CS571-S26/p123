import { Link } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = `
    text-sm font-medium transition
    ${colors.accent.textHover}
  `;

  return (
    <nav
      className={`
        flex items-center justify-between
        px-6 py-4
        ${colors.bg.base}
        ${colors.text.primary}
      `}
    >
      {/* Brand */}
      <Link
        to="/"
        className={`
          text-lg font-bold tracking-tight transition
          ${colors.accent.textHover}
        `}
      >
        My Portfolio
      </Link>

      {/* Nav buttons */}
      <div className="flex gap-6">
        <button onClick={() => scrollTo("modeling")} className={linkClass}>
          3D Modeling
        </button>

        <button onClick={() => scrollTo("design")} className={linkClass}>
          Design
        </button>

        <button onClick={() => scrollTo("game")} className={linkClass}>
          Game Dev
        </button>
      </div>
    </nav>
  );
}