export default function AboutMe() {
   return (
    <main
      data-testid="test-about-page"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white overflow-hidden p-8 md:p-16"
    >
      <div>
      <div className=" flex justify-center z-10 lg:h-[50rem] md:h-[20rem]">
        <img
          src="/abt.jpg"
          alt="Profile working creatively"
          className="rounded-md shadow-md  h-full w-full max-w-md object-cover"
        />
      </div>


    

   </div>
      <div className="lg:w-1/2 md:w-[35rem] lg:pl-24 mt-12  text-gray-800 z-30">
         <h1 className="text-[3.5rem] lg:text-[5rem] font-bold ">
        ABOUT ME
      </h1>
        <section data-testid="test-about-bio" className="mb-6">
         
          <h2 className="text-xl font-semibold mb-2">Bio</h2>
          <p className="text-gray-600 leading-relaxed">
            I’m a passionate front-end developer who loves crafting clean,
            user-focused web experiences. Every project I build reflects a mix
            of creativity, logic, and continuous learning.
          </p>
        </section>

        <section data-testid="test-about-goals" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Goals in this program</h2>
          <p className="text-gray-600 leading-relaxed">
            My goal is to deepen my React and Next.js knowledge, master
            responsive and dynamic designs, and grow into a confident freelance
            front-end developer.
          </p>
        </section>

        <section data-testid="test-about-confidence" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Areas of low confidence</h2>
          <p className="text-gray-600 leading-relaxed">
            I sometimes find it challenging to manage complex states or
            optimize performance in larger apps, but I’m improving by practicing
            and reading quality documentation.
          </p>
        </section>

        <section data-testid="test-about-future-note" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Note to future self</h2>
          <p className="text-gray-600 leading-relaxed">
            Keep showing up. Every small step counts. One day, you’ll look back
            and realize how far consistency has taken you.
          </p>
        </section>

        <section data-testid="test-about-extra">
          <h2 className="text-xl font-semibold mb-2">Extra thoughts</h2>
          <p className="text-gray-600 leading-relaxed">
            Growth isn’t about speed; it’s about direction. Stay creative, stay
            curious, and never stop learning.
          </p>
        </section>
      </div>
    </main>
  );
};
