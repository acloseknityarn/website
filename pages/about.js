import SocialLinks from '../components/SocialLinks';

export default function About() {
  return (
    <div className="md:max-w-3xl mx-auto px-6">
      <h1 className="mb-8 text-4xl mt-2 lg:mt-0 lg:text-5xl font-bold text-gray-600">About Me</h1>

      <section className="text-gray-600 text-xl">
        <p className="mb-5">Hey Visitor! Thanks for stopping by. I'm Aryamann which translates to <strong>'a companion'</strong>. I'm currently gaining experience in the web development world.</p>

        <p className="mb-5">I am pursuing Computer Science at Georgian College, Barrie. I am always prepared to meet new people, build connections and learn new things.
          I strive for making a difference in the world through my work.</p>

        <p className="mb-5">I'm passionate about web and game development, animation illustration, and music. I like to push myself to take up new challenges and also solve complex puzzles.</p>


      </section>

      <h2 className="mb-4 text-3xl text-gray-600 font-bold">You can find me on</h2>

      <SocialLinks />

      {/* <h2 className="mb-5 text-3xl text-gray-600 font-bold">Skills</h2>

      <h2 className="mb-5 text-3xl text-gray-600 font-bold">Art Work - showcase</h2> */}

      {/* <AryamannContact /> */}
    </div>
  )
}