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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hi, I’m Caden
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
          I build interactive 3D worlds, games, and digital experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo("modeling")}
            className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}