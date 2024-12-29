import { client } from "@/sanity/lib/client";
import BlogCard from "../blogCard/page";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const revalidate = 2;  
const BlogsPage = async () => {
    interface Post {
        title: string;
        summary: string;
        slug: string;
        image:SanityImageSource;
      }
    const query = `*[_type=='post']|order(_createdAt desc)
    {
      title,summary,image,
      "slug":slug.current
    }`;
    const postsData:Post[] = await client.fetch(query);
  return (
    <div className="pt-20">
      <section className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-3 gap-3 px-2">
        {
          postsData.map(
            (post:Post,index:number)=>{
              return(
                <BlogCard key={index} blogTitle={post.title} blogDescription={post.summary} slug={post.slug} image={post.image}/>
              )
            }
          )
        }
        
      </section>
    </div>
  )
}

export default BlogsPage;
