import Head from 'next/head'
import Image from 'next/image'
import SocialLinks from '../components/SocialLinks';
import profilePic from '../public/images/portfolio-pic.jpg'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* will talk about this later */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* fullName */}
        <div>
            Aryamann Verma
        </div>
        
        {/* profilePic */}
        <Image
          src={profilePic}
          alt="Aryamann's Photograph"
          priority
        />
        
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
     
    </div>
  )
}
