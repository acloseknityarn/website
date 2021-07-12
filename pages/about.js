import AryamannContact from "../components/Contact";
import SocialLinks from '../components/SocialLinks';
import NextLink from 'next/link'

export default function About(){
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl mb-8">About Me</h1>
      
      <p className="mb-5">Hey Visitor! Thanks for stopping by. I'm Aryamann which translates to 'a companion'. I'm currently gaining experience in the web development world.</p>
      <p className="mb-5">I'm passionate about web and game development, animation illustration, and music. I like to push myself to take up new challenges and also solve complex puzzles.</p>
      
      <h2 className="mb-4 text-2xl">You can find me on</h2>
      
      <SocialLinks />
      
      <p className="mb-5">I am pursuing Computer Science at Georgian College, Barrie. I am always prepared to meet new people, build connections and learn new things. 
      I consider making a difference in the world through my work.</p>

      <h2 className="mb-5 text-2xl">Skills</h2>

      <p className="mb-5">Art Work - showcase</p>
      
      <AryamannContact />
    </div>
  )
}