import Head from 'next/head'
import Image from 'next/image'
import SocialLinks from '../components/SocialLinks'
import profilePic from '../public/images/portfolio-pic.jpg'


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-8">
      {/* will talk about this later */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <section className="text-center mb-8">
        {/* fullName */}
        <h1 className="text-4xl mt-2 lg:mt-0 lg:text-5xl font-bold mb-4 text-gray-600">
          Aryamann Verma
        </h1>

        <h2 className="text-2xl text-gray-500 font-semibold">
          <div>
            Computer Programming
          </div>

          <div>
            Undergrad @ Georgian College
          </div>
        </h2>

        <p className="mt-2 text-xl text-green-500 font-medium">
          Actively looking for co-op / internship opportunities
        </p>
      </section>


      {/* profilePic */}
      <div className="md:w-3/5 md:mx-auto">
        <Image
          className="rounded-3xl"
          src={profilePic}
          alt="Aryamann's Photograph"
          priority
          placeholder="blur"
        />
      </div>
      
      {/* SocialLinks */} 
      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>

    </div>

  )
}
