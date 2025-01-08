import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { urlFor } from "@/sanity/lib/image";

export default function Specialities({ data }: { data: Blog }) {
  return (
    <div className="bg-white rounded-lg shadow-lg pb-4 transition-transform duration-300 hover:shadow-2xl"
    >
      <div className="h-[300px] w-full md:h-[350px]">
        <Image
          src={urlFor(data.image).url()}
          alt={data.title}
          width={350}
          height={250}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      <div className="mt-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h4 className="flex items-center md:text-lg text-gray-700 font-semibold"><MdOutlineDateRange className="mr-2" />{data.publishedAt}</h4>
          <h4 className="flex items-center md:text-lg text-gray-700 font-semibold"><FiUser className="mr-2" />{data.authorName}</h4>
        </div>
        <h3 className="md:text-2xl text-xl font-bold mb-3">{data.title}</h3>
        <p className="md:text-lg text-gray-700 mb-3 text-start">{data.paragraph}</p>
          <Link href={`/posts/${data.slug}`} className="md:text-lg flex items-center text-pink-500 mb-2">Read More <span className="text-lg ml-2"><FaLongArrowAltRight /></span></Link>
      </div>
    </div>
  )
}