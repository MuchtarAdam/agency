import React from "react";
import companyLogo1 from "../assets/icons/companyLogo1.png";
import companyLogo2 from "../assets/icons/companyLogo2.png";
import companyLogo3 from "../assets/icons/companyLogo3.png";
import companyLogo4 from "../assets/icons/companyLogo4.png";
import companyLogo5 from "../assets/icons/companyLogo5.png";
import companyLogo6 from "../assets/icons/companyLogo6.png";


const Services = () => {
    const services = [
        {
            id: 1,
            title: "Membership Organisation",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat provident dolorem quasi voluptatum. Voluptas, ipsum?",
            image: "/src/assets/icons/iconMember.png"
            
        },
        {
            id: 2,
            title: "Associations",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis aliquam fuga repellat ipsa tempore.",
            image: "/src/assets/icons/iconNational.png"
            
        },
        {
            id: 3,
            title: "Clubs and Groups",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ullam error totam assumenda consectetur reprehenderit illum aliquid quaerat dolor eos.",
            image: "/src/assets/icons/iconClub.png"
            
        }
    ];
    return(
        <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
            <div className="my-8 text-center">
                <h2 className="mb-2 text-4xl font-semibold text-neuturalDGrey">Our Clients</h2>
                <p className="text-neuturalGrey">We have been working with some Fortune 50+ clients</p>

                <div className="flex flex-wrap items-center justify-between my-12">
                    <img src={companyLogo1} alt="" />
                    <img src={companyLogo2} alt="" />
                    <img src={companyLogo3} alt="" />
                    <img src={companyLogo4} alt="" />
                    <img src={companyLogo5} alt="" />
                    <img src={companyLogo6} alt="" />
                </div>

            </div>

            <div className="mx-auto mt-20 text-center md:w-1/2">
                <h2 className="mb-2 text-4xl font-semibold text-neuturalDGrey">Manage your entire community in a single system</h2>
                <p className="text-neuturalGrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quod!</p>
            </div>

            <div className="grid grid-cols-1 gap-12 mx-auto mt-14 lg:grid-cols-3 md:grid-cols-2 md:w-11/12">
                {
                    services.map(
                        services => 
                        <div key={services.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                                <img src={services.image} alt="" className="-ml-2"/></div>
                            <h4 className="px-2 mb-2 text-2xl font-bold text-neuturalDGrey">{services.title}</h4>
                            <p className="text-sm text-neuturalGrey">{services.description}</p>
                        </div>
                    </div>)
                }
            </div>
            
        </div>

    );
}

export default Services;