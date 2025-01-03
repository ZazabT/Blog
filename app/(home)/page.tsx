import Hero from "@/components/Hero";
import Catagory from "@/components/Catagory";
import Blog from "@/components/Blog";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
        
        <div className="max-w-7xl mx-auto mb-40 ">
          {/* Hero */}
             <Hero/>
        </div>

        <div className="max-w-7xl mx-auto mb-10 ">
          {/* Category */}
        <Catagory/>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Blogs */}
        <Blog/>
        </div>
         

    </div>  

  );
}
