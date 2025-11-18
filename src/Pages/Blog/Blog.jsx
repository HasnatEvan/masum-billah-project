import { Helmet } from "react-helmet";
import BlogHero from "./BlogHero";
import BlogSection1 from "./BlogSection1";
import BlogSection2 from "./BlogSection2";
import BlogSection3 from "./BlogSection3";

const Blog = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Blog | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Read the latest blogs from Graphics Amazon about graphic design trends, branding tips, creative inspiration, and digital marketing insights." 
                />
                <meta 
                    name="keywords" 
                    content="graphics design blog, branding tips, design trends, creative ideas, Graphics Amazon articles, marketing insights" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <BlogHero />
            <BlogSection1 />
            <BlogSection2 />
            <BlogSection3 />
        </div>
    );
};

export default Blog;
