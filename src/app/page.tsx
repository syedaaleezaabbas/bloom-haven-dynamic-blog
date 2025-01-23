import Image from "next/image";
import Specialities from "./components/Specialities";
import Hero from "./components/Hero";
import { client } from "@/sanity/lib/client";

export default async function Home() {

  const query = `*[_type == 'blog'] | order(_updatedAt asc){
    title,
      paragraph,
      publishedAt,
      authorName,
      "slug":slug.current,
      image
  }`

  const data: Blog[] = await client.fetch(query, {}, { cache: 'no-cache'})
  // console.log(data)

  return (
    <>
      <Hero />
      <section className="py-20 bg-gray-50 max-w-screen-2xl mx-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-800 font-bold mb-6">Our Latest Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {
              data.map((data: Blog) => (
                <Specialities data={data} key={data.slug} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
