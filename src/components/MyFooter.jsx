import React from "react";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/icons8-yg-select-100.png';

const MyFooter = () => {
    return(
        <Footer container>
            <div className="w-full mt-24">
                <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className="mb-8 space-y-5">
                    <a href="" className="flex space-x-3 text-2xl font-semibold item-center">
                            <img src={logo} alt="Nexcent" className="items-center inline-block w-8" />
                            <span className="text-[#263238]">TanyaFisika</span>
                    </a>
                    <div>
                        <p className="mb-2">Copyright © 2023 Muchtar Adam.</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">React JS</Footer.Link>
                        <Footer.Link href="#">Tailwind CSS</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Github</Footer.Link>
                        <Footer.Link href="#">Discord</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Adam" year={2023} />
                <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                </div>
                </div>
            </div>
        </Footer>
    );
};

export default MyFooter;