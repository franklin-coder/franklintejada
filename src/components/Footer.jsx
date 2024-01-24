import React from 'react';
import { github, linkedin } from "../assets";

const Footer = () => {
    return (
        <footer className=" social-links footer-height flex justify-center items-center w-full">
            <div className="flex gap-4">
                <a href="https://github.com/franklin-coder">
                    <img src={github} alt="LinkedIn" style={{ height: '50px', paddingBottom:'10px', paddingRight:'5px' }} />
                </a>
                <a href="https://ca.linkedin.com/in/franklin-d-tejada-24a033117/en">
                    <img src={linkedin} alt="GitHub" style={{ height: '50px', paddingBottom:'10px', paddingRight:'5px'}} />
                </a>
                <a href="https://ca.linkedin.com/in/franklin-d-tejada-24a033117/en">
                    <img src={linkedin} alt="GitHub" style={{ height: '50px', paddingBottom:'10px', paddingRight:'5px'}} />
                </a>
                
            </div>
        </footer>
    );
};

export default Footer;
