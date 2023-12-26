import React from "react";
import aboutImg from "../assets/aboutPict.png";
import icon1 from "../assets/icons/IconStatMember.png";
import icon2 from "../assets/icons/iconClub.png";
import icon3 from "../assets/icons/IconStatBooking.png";
import icon4 from "../assets/icons/IconStatPayments.png";

const About = () => {
    return(
        <div>
            <div className="px-4 mx-auto lg:px-14 max-w-screen-2xl">

                <div className="flex flex-col items-center justify-between gap-12 mx-auto py-44 md:w-11/12 md:flex-row">

                    <div>
                        <img src={aboutImg} alt="" />
                    </div>

                    <div className="mx-auto md:w-3/5">

                        <h2 className="mb-4 text-4xl font-semibold text-neuturalDGrey md:w-4/5">The unseen of spending three years at TanyaFisika</h2>

                        <p className="mb-8 text-sm md:w-3/5 text-neuturalGrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut natus voluptatem voluptate, saepe, dolore officia beatae id at debitis corporis! Excepturi quisquam eaque eos!</p>

                        <button className="px-4 py-3 text-white rounded-md bg-brandPrimary">Learn More</button>
                        
                    </div>
                </div>

            </div>

            <div className="px-4 mx-auto -mt-16 lg:px-14 max-w-screen-2xl bg-neuturalSilver">
                <div className="flex flex-col items-center justify-between gap-8 pt-10 md:flex-row">

                    <div className="md:w1/2">
                        <h2 className="mb-4 text-4xl font-semibold text-neuturalDGrey">Helping bussiness <span className="block text-brandPrimary">reinvent itself</span></h2>

                        <p className="text-sm md:w-3/5 text-neuturalGrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
                    </div>

                    <div className="flex flex-col justify-around gap-12 mx-auto md:w-1/2 sm:flex-row sm:items-center">

                        <div className="space-y-8">

                            <div className="flex items-center gap-4">
                                <img src={icon1} alt="" />
                                <div>
                                    <h4 className="text-2xl font-semibold text-neuturalDGrey">679</h4>
                                    <p>Members</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <img src={icon2} alt="" />
                                <div>
                                    <h4 className="text-2xl font-semibold text-neuturalDGrey">679</h4>
                                    <p>Members</p>
                                </div>
                            </div>

                        </div>

                        <div className="space-y-8">

                            <div className="flex items-center gap-4">
                                <img src={icon1} alt="" />
                                <div>
                                    <h4 className="text-2xl font-semibold text-neuturalDGrey">679</h4>
                                    <p>Members</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <img src={icon2} alt="" />
                                <div>
                                    <h4 className="text-2xl font-semibold text-neuturalDGrey">679</h4>
                                    <p>Members</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;