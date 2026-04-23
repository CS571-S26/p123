import { colors } from "../design-system/tokens/colors";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/p123/HeroVids/CelPingPong.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${colors.bg.overlay}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight ${colors.text.primary}`}>
          Hi, I’m Caden
        </h1>

        <p className={`mt-4 max-w-xl text-lg ${colors.text.secondary}`}>
          I build interactive 3D worlds, games, and digital experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo("my-work")}
            className={`
              px-5 py-2 rounded-full
              ${colors.accent.primary} text-black font-medium
              hover:opacity-90 transition
            `}
          >
            View Work
          </button>

          <button
            onClick={() => scrollTo("about")}
            className={`
                px-5 py-2 rounded-full
                border border-neutral-600
                ${colors.text.primary}
                hover:border-cyan-400 ${colors.accent.textHover}
                transition
            `}
            >
            About Me
            </button>   
        </div>
      </div>
    </section>
  );
}