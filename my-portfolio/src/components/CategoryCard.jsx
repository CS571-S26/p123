// src/components/CategoryCard.jsx

import { useNavigate } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function CategoryCard({ title, image, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={`
        relative aspect-square overflow-hidden rounded-xl
        ${colors.bg.surface} shadow-md cursor-pointer
        hover:scale-[1.02] transition
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${colors.bg.overlay} ${colors.text.primary}
          text-xl font-semibold
        `}
      >
        {title}
      </div>
    </div>
  );
}