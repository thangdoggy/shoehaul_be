import React from "react";
import {Link} from 'react-router-dom'
import Logo from "../data/logo/shoeshaul-logo2.png";
import fb from '../data/homepage/img/fb.png';
import linkedin from '../data/homepage/img/linkedin.png';
import ins from '../data/homepage/img/ins.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-black  bottom-0">
      <Link to='/'><img src={Logo} alt="ShoesHaul Logo" className="mx-3 h-36" /></Link>
      
      <div className="float-right">
        <div className="text-white font-bold text-2xl mx-11">Contact Us</div>
        <div className ='social-apps flex flex-1 justify-between mx-11'>
                      <div>
                          <img src={fb} alt='facebook' className='pic-social-apps rounded-sm cursor-pointer'/>
                      </div>
                      <div>
                          <img src={linkedin} alt='linkedin' className='pic-social-apps cursor-pointer'/>
                      </div>
                      <div>
                          <img src={ins} alt='instagram' className='pic-social-apps rounded-sm cursor-pointer'/>
                      </div>
                  </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default Footer;
