import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque ex minus quas tempora error, quibusdam voluptatibus dolor ipsa incidunt atque quo ratione! Voluptas labore debitis ex, illo ullam eos quibusdam! Dolorum adipisci asperiores tempore placeat. Et obcaecati, ratione, voluptates, fugiat culpa quod doloremque ipsa soluta quisquam similique suscipit itaque?</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus et eius fugit magni reiciendis iste, facere sed minima fugiat, obcaecati perferendis. Voluptates fugiat error magnam? Magnam illum at aliquid dolore molestias vero illo delectus a iste dolor, unde velit perferendis dolores voluptatem provident ut in soluta totam itaque sunt! Eos suscipit maiores quo aperiam asperiores aliquid. Ratione, eius cum dolor maiores iusto ab, in impedit, consequuntur iure error incidunt similique.
        </p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our Mission is Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima, saepe vitae cupiditate molestiae nostrum ipsa nobis error nesciunt accusamus dignissimos commodi? Quas, exercitationem ipsa, fugiat eveniet praesentium cumque minus deleniti temporibus numquam commodi officiis, animi molestias nihil tempora minima.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt inventore eveniet repellendus doloremque ducimus, beatae voluptas tenetur totam alias, nam harum assumenda. Non, cum!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt inventore eveniet repellendus doloremque ducimus, beatae voluptas tenetur totam alias, nam harum assumenda. Non, cum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt inventore eveniet repellendus doloremque ducimus, beatae voluptas tenetur totam alias, nam harum assumenda. Non, cum!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About