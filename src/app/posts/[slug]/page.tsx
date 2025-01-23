import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from 'next-sanity'
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import Comments from '@/app/components/Comments'

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == 'blog' && slug.current == "${slug}"]{
    image,
    publishedAt,
    authorName,
    block
  }[0]`

  const data = await client.fetch(query, {}, { cache: 'no-cache'})
  console.log(data)
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto p-4">
          {/* flex container for image and text */}
          <div className="flex flex-col items-center my-12">
            {/* image on the left */}
            <Image
              src={urlFor(data.image).url()}
              alt="blog-images"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-2xl mb-16"
            />

            {/* text on the right */}
            <div className="flex flex-col items-start">
              {/* Date and Author Side by Side */}
              <div className="flex items-center justify-start mb-6">
                <h4 className="flex items-center md:text-lg text-gray-700 font-semibold mr-8">
                  <MdOutlineDateRange className="mr-2" />
                  {data.publishedAt}
                </h4>
                <h4 className="flex items-center md:text-lg text-gray-700 font-semibold">
                  <FiUser className="mr-2" />
                  {data.authorName}
                </h4>
              </div>

              {/* Text Section */}
              <section className='space-y-4 md:text-lg'>
                <PortableText value={data.block} />
                <Comments />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page

