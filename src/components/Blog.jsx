import React from "react";
import arrowRight from "../assets/icons/arrowRight.png";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "What are your safeguarding responsibilities and how can you manage them?",
            img: "/src/assets/image 19.png"
           
        },
        {
            id: 2,
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            img: "/src/assets/image 18.png"
        },
        {
            id: 3,
            title: "Revamping the Membership Model with Triathlon Australia",
            img: "/src/assets/image 20.png"
        },
    ];
    return(
        <div className="px-4 mx-auto my-12 lg:px-14 max-w-screen-2xl">
            <div className="mx-auto text-center md:w-1/2">
                <h2 className="mb-4 text-4xl font-semibold text-neuturalDGrey">Caring is the new marketing</h2>

                <p className="mx-auto mb-8 text-sm md:w-3/4 text-neuturalGrey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam rem aut eos repellendus velit, adipisci repellat iure quidem dolorum hic? Excepturi minus molestias eveniet laborum.</p>
            </div>

            <div className="grid justify-between grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 item-center">
                {
                blogs.map(
                            blog => 
                            <div key={blog.id} className="relative mx-auto mb-12 cursor-pointer">
                                <img src={blog.img} alt=""/>
                            <div className="absolute left-0 right-0 px-4 py-6 mx-auto text-center bg-white rounded-md shadow-xl md:w-6/7 -bottom-24">
                                
                                <h3 className="px-2 mb-2 text-sm text-neuturalDGrey">{blog.title}</h3>
                                <div className="flex items-center justify-center gap-8">
                                        <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Read More{" "}</a>
                                        <img src={arrowRight} alt="" className="inline-block"/>
                                    </div>
                                
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Blog;