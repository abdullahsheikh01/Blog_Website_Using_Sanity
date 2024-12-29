import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/app/components/customComponent/page";
export const revalidate = 2;  
const Blogs = async({params:{slug}}:{params:{slug:string}}) => {
  interface MarkDef {
    _key: string;
    _type: string;
}
    interface PostData {
        title: string;
        summary:string
        image: {
          _type: string;
          asset: {
            _ref: string;
            _type: string;
          };
        };
        content: {
          _key: string;
          _type: string;
          style: string;
          markDefs: MarkDef[]; 
          children: {
            _key: string;
            _type: string;
            text: string; 
            marks: string[];
          }[];
        }[];
        author: {
          name: string;
          image: {
            _type: string;
            asset: {
              _ref: string;
              _type: string;
            };
            crop?: {
              top: number;
              bottom: number;
              left: number;
              right: number;
            };
            hotspot?: {
              x: number;
              y: number;
              height: number;
              width: number;
            };
          };
        };
      };    
    const query = `*[_type=="post"&&slug.current=="${slug}"]{
    title,image,content,summary,author->{name,image}
    }[0]`;
    const postData: PostData= await client.fetch(query);
    return (
    <article className="px-[125px] pt-24 sm:px-[90px] exsm:px-2">
        <h1 className="font-mont text-6xl font-bold text-[##1A202C] sm:text-5xl exsm:text-3xl">
            {postData.title}
        </h1>
        <div className="flex justify-center pt-4"> 
        <Image src={urlFor(postData.image).url()} alt={postData.title} width={1200} height={600} className="2xl:w-[700px] 2xl:h-[350px]
        xl:w-[800px] xl:h-[400px] lg:w-[800px] lg:h-[400px] md:w-[600px] md:h-[300px] sm:w-[400px] sm:h-[200px] exsm:w-[400px] exsm:h-[200px]"
        />
        </div>
        <section className="text-[18px] font-mont font-medium pt-5">
        <PortableText value={postData.content} components={components}/>
        </section>
        <p className="font-mont font-medium text-[22px] pt-8 leading-relaxed sm:text-[18px] exsm:text-[18px]">
          <span className="font-mono text-2xl text-red-400 font-semibold">Summary: <br/> </span>{postData.summary}
        </p>
        <h4 className="font-mont font-bold text-[30px] pt-8 text-black ">Author:</h4>
        <div className="flex flex-col gap-2">
        <Image src={urlFor(postData.author.image).url()} alt={postData.title} width={1200} height={600} className="2xl:w-[200px] 2xl:h-[200px]
        xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[200px] exsm:w-[150px] exsm:h-[150px]"
        />
        <h4 className="text-xl font-mono">{postData.author.name}</h4>
        </div>
    </article>
  )
}

export default Blogs;
