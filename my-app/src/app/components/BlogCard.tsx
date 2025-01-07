import { Card,CardHeader,CardContent,CardDescription,CardFooter } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
interface BlogCardProps {
    blogTitle:string;
    blogDescription:string;
    slug:string,
    image:SanityImageSource
}
const BlogCard = (prop:BlogCardProps) => {
    console.log(prop)
  return (
        <Card className="w-full h-auto">
     <CardHeader>
        <Image src={urlFor(prop.image).url()}
        height={200} width={300}
        alt={prop.blogTitle}
        />
    </CardHeader>
    <CardContent>
        <h2 className="font-mont font-bold text-[24px]">{prop.blogTitle}</h2>
    </CardContent> 
    <CardDescription className="m-5">
        <p className="font-mont font-medium text-[18px]">{prop.blogDescription}</p>
    </CardDescription>
    <CardFooter>
        <Link href={`/blogs/${prop.slug}`}>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-800 transition-all duration-300">
        Read More
         </button>
        </Link>
    </CardFooter>
    </Card>
  )
}

export default BlogCard;
