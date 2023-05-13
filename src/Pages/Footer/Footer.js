import React from 'react';
import github from '../../assets/Footer/github.webp';
import facebook from '../../assets/Footer/Facebook_icon.svg.png';
import gmail from '../../assets/Footer/gmail.png';
import linkdin from '../../assets/Footer/linkedin.png';

const Footer = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" style={{background:'rgba(6,34,63,255)',color:'white'}}>
        <footer className="footer p-10">
            <div>
                <span className="footer-title">Services</span>
                {/* <a className="link link-hover">Weeding photos</a>
                <a className="link link-hover">Couple session</a>
                <a className="link link-hover">Pre wedding </a> */}
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Riviews</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
        <footer className="footer px-10 py-4">
            <div className="items-center grid-flow-col">
                <p>Pranto Das <br /> <img src={gmail} className='w-8 inline mr-2' alt="" />prantochandrodas@gmail.com</p>
            </div>
            <div className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/prantochandrodas" target='_blank'><img src={github} className='w-8' alt="" /></a>
                    <a href='https://www.facebook.com/pranto.chandrodas.33/' target='_blank'><img src={facebook} className='w-8' alt="" /></a>
                    <a href='https://www.linkedin.com/in/pranto-das08/' target='_blank'><img src={linkdin} className='w-8' alt="" /></a>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;