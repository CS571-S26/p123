import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-zinc-950 text-white shadow-md sticky top-0 z-50">
      {/* Brand */}
      <Link
        to="/"
        className="text-lg font-bold tracking-tight hover:opacity-80 transition"
      >
        My Portfolio
      </Link>

      {/* Nav buttons */}
      <div className="flex gap-6 text-sm font-medium">
        <button
          onClick={() => scrollTo("modeling")}
          className="hover:text-zinc-300 transition"
        >
          3D Modeling
        </button>

        <button
          onClick={() => scrollTo("design")}
          className="hover:text-zinc-300 transition"
        >
          Design
        </button>

        <button
          onClick={() => scrollTo("game")}
          className="hover:text-zinc-300 transition"
        >
          Game Dev
        </button>
      </div>
    </nav>
  );
}