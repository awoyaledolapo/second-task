export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 bg-white">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        {/* Decorative circle icon */}
        <div className="absolute -top-8 -left-8 md:-left-16 w-10 h-10 md:w-12 md:h-12">
          <img
            src="/images/decor-icon.svg"
            alt="decorative icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Image */}
        <img
          src="/images/me-working.jpg"
          alt="Me working"
          className="rounded-md object-cover w-[320px] md:w-[400px] shadow-sm"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full md:w-1/2 md:pl-16 text-left">
        <h2 className="text-[64px] leading-none font-extrabold text-[#111] mb-10 tracking-tight">
          ABOUT ME
        </h2>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-md">
          I’m a creative designer and builder who enjoys turning simple ideas
          into beautiful and functional results. I love working on projects that
          balance clean aesthetics with thoughtful details, whether it’s a
          product, a space, or a digital experience.
          <br />
          <br />
          My process always starts with curiosity — exploring, testing, and
          refining until everything feels just right. Outside of work, I’m
          usually experimenting with new design tools, sketching concepts, or
          learning something new to grow as a creator.
        </p>
      </div>
    </section>
  );
}
