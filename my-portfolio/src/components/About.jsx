import { colors } from "../design-system/tokens/colors";

export default function About() {
  return (
    <section id = "about" className={`px-6 py-16 max-w-6xl mx-auto ${colors.bg.base}`}>
      <div className="grid gap-10 items-center md:grid-cols-2">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/p123/me.jpg"
            alt="Caden"
            className="
                w-full max-w-sm md:max-w-md
                aspect-square object-cover
                rounded-2xl shadow-md
                ring-1 ring-neutral-800
            "
          />
        </div>

        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className={`text-3xl font-bold ${colors.text.primary}`}>
            About Me
          </h2>

          <p className={`text-lg leading-relaxed ${colors.text.secondary}`}>
            I’m a developer focused on creating interactive 3D experiences,
            games, and digital designs. I enjoy building systems that feel
            responsive, immersive, and intuitive.
          </p>

          <p className={`text-lg leading-relaxed ${colors.text.secondary}`}>
            My work combines technical problem solving with creative design,
            using tools like Unity, Blender, and modern web technologies.
            I’m especially interested in projects that blend gameplay,
            visual storytelling, and user interaction.
          </p>
        </div>

      </div>
    </section>
  );
}