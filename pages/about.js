import AryamannContact from "../components/Contact";
import NextLink from 'next/link'

export default function About(){
  return (
    <div>
      <h1 className="text-3xl mb-8">About Me</h1>
      
      <p className="mb-5">Hey Visitor! Thanks for stopping by. I'm Aryamann which translates to 'a companion'. Currently gaining experience of the web development world.</p>
      <p className="mb-5">I'm passionate about web and game development, animation illustration, and music. I like to push myself to take up new challenges and also solve complex puzzles.</p>
      
      <p className="mb-2">Social Links</p>
      <ul className="mb-5 underline">
        <li><a href="https://github.com/acloseknityarn">Github</a></li>
        <li><a href="https://www.linkedin.com/in/aryamann-verma-614189169/">LinkedIn</a></li>
        <li><a href="https://twitter.com/acloseknityarn">Twitter</a></li>
        <li><a href="https://www.instagram.com/acloseknityarn/">Instagram</a></li>  
      </ul>

      <p className="mb-5">About Myself - I'm pursuing Computer Science at Georgian College, Barrie. I am always prepared to meet new people, build connections and learn new things. I consider making an incentive for individuals and affecting the world through my work.</p>
      <p className="mb-5">Skills - programming languages</p> 

      <p className="mb-5">Art Work - showcase</p>
      
      <AryamannContact />
    </div>
  )
}