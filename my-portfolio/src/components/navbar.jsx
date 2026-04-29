import { Link } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function Navbar() {
  const externalLinkClass = `
    text-sm font-medium transition
    ${colors.text.secondary}
    hover:text-white
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

      {/* External Links */}
      <div className="flex items-center gap-6">
        
        <a
          href="https://github.com/cadermill"
          target="_blank"
          rel="noreferrer"
          className={externalLinkClass}
        >
          <img
            src="/p123/Icons/GitHub_Invertocat_White.svg"
            alt="GitHub"
            className="w-7 h-7"
          />
        </a>

        <a
          href="https://linkedin.com/in/caden-miller-736251295"
          target="_blank"
          rel="noreferrer"
          className={externalLinkClass}
        >
          <img
            src="/p123/Icons/InBug-White.png"
            alt="LinkedIn"
            className="w-7 h-7"
          />
        </a>

        <a
          href="https://itch.io/profile/cadermill"
          target="_blank"
          rel="noreferrer"
          className={externalLinkClass}
        >
          <img
            src="/p123/Icons/itch-io.svg"
            alt="Itch"
            className="w-7 h-7"
          />
        </a>

      </div>
    </nav>
  );
}