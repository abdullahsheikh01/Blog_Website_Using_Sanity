import Link from "next/link";
export default async function Home() {
  return (   <div className=" h-screen flex flex-col pt-[10%]">
      <section className="bg-none text-black py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Blog Website</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the latest stories, insights, and tips on various topics.
          </p>
          <Link href="/components/blogsPage" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-100">
            Explore Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
