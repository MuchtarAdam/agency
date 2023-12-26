import React from "react";
import ProductImg from "../assets/ProductPana.png";
import companyLogo1 from "../assets/icons/companyLogo1.png";
import companyLogo2 from "../assets/icons/companyLogo2.png";
import companyLogo3 from "../assets/icons/companyLogo3.png";
import companyLogo4 from "../assets/icons/companyLogo4.png";
import companyLogo5 from "../assets/icons/companyLogo5.png";
import companyLogo6 from "../assets/icons/companyLogo6.png";
import arrowRight from "../assets/icons/arrowRight.png";
import imgProduct from "../assets/image 9.png";

const Products = () =>{
    return(
        <div>
            <div className="px-4 mx-auto lg:px-14 max-w-screen-2xl">

                <div className="flex flex-col items-center justify-between gap-12 mx-auto py-44 md:w-11/12 md:flex-row">

                    <div>
                        <img src={ProductImg} alt="" />
                    </div>

                    <div className="mx-auto md:w-3/5">

                        <h2 className="mb-4 text-4xl font-semibold text-neuturalDGrey md:w-4/5">How to design your site footer like we did</h2>

                        <p className="mb-8 text-sm md:w-3/5 text-neuturalGrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut natus voluptatem voluptate, saepe, dolore officia beatae id at debitis corporis! Excepturi quisquam eaque eos!</p>

                        <button className="px-4 py-3 text-white rounded-md bg-brandPrimary">Learn More</button>
                        
                    </div>
                </div>

            </div>

            <div className="px-4 mx-auto -mt-16 lg:px-14 max-w-screen-2xl bg-neuturalSilver">
                <div className="flex flex-col items-center justify-between gap-8 pt-10 md:flex-row ">

                    <div className="md:w-1/3 bg-slate-500">
                        <img src={imgProduct} alt="" />
                    </div>

                    <div className="mx-auto md:w-2/3">

                        <div>
                            <p className="mb-8 text-sm leading-7 md:w-4/5 text-neuturalGrey">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

                            <h5 className="mb-2 text-xl font-semibold text-brandPrimary">Tim Smith</h5>
                            <p>British Dragon Boat Association</p>

                            <div>
                                <div className="flex flex-wrap items-center gap-8 mt-8">
                                    <img src={companyLogo1} alt="" className="cursor-pointer" />
                                    <img src={companyLogo2} alt="" className="cursor-pointer" />
                                    <img src={companyLogo3} alt="" className="cursor-pointer" />
                                    <img src={companyLogo4} alt="" className="cursor-pointer" />
                                    <img src={companyLogo5} alt="" className="cursor-pointer" />
                                    <img src={companyLogo6} alt="" className="cursor-pointer" />
                                    <div className="flex items-center gap-8">
                                        <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Met all customers{" "}</a>
                                        <img src={arrowRight} alt="" className="inline-block"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Products;