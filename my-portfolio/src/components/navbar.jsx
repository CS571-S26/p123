import { Link } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function Navbar() {
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
        Caden Miller
      </Link>

      {/* Nav links */}
      <div className="flex gap-6">
        <Link to="/projects/modeling" className={linkClass}>
          3D Modeling
        </Link>

        <Link to="/projects/design" className={linkClass}>
          Graphic Design
        </Link>

        <Link to="/projects/game" className={linkClass}>
          Game Development
        </Link>
      </div>
    </nav>
  );
}