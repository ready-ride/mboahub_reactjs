import React from 'react';
import ContactItem from '../../ui-components/ContactItem/ContactItem';
import Logo from '../../ui-components/Logo/Logo';

import { AiOutlineMail,
         AiOutlinePhone,
         AiFillFacebook,
         AiOutlineTwitter,
         AiFillInstagram,
         AiFillLinkedin,
         AiFillApple,
         } from 'react-icons/ai';

import { MdOutlineLocationOn } from 'react-icons/md';
import { FaGooglePlay } from 'react-icons/fa';

import './Footer.scss';
import IconBox from '../../ui-components/IconBox/IconBox';
import TextButton from '../../ui-components/TextButton/TextButton';


function Footer() {
  return (
    <div className='footer-container'>
        <div className='container'>
            <div className='upper-footer row'>
                <div className='col-md-3'>
                    <Logo text="MyPlace Inc"/>
                    <p className='text-gray mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    </p>
                    <div className='open-hours'>
                        <strong className='text-blue text-dark-blue'>Monday - Friday: <span className='text-blue'>8am - 6pm</span></strong><br />
                        <strong className='text-blue text-dark-blue'>Saturday - Sunday: <span className='text-blue'>9am - 3pm</span></strong>
                    </div>
                </div>
                <div className='col-md-3 text-dark-blue'>
                    <h5 className='my-4 text-bold'>Helpful links</h5>
                    <ul className='helpful-links'>
                        <li>About Our Company</li>
                        <li className='mt-1'>Our last News</li>
                        <li className='mt-1'>Pricing Plans</li>
                        <li className='mt-1'>Contacts</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className='col-md-3 text-dark-blue'>
                    <h5 className='my-4 text-bold'>Contact Info</h5>
                    <ContactItem icon={<AiOutlineMail size="20" />} title="Mail" text="yourmail@domain.com" />
                    <ContactItem icon={<MdOutlineLocationOn size="20" />} title="Adress" text="USA 27TH Brooklyn NY" />
                    <ContactItem icon={<AiOutlinePhone size="20" />} title="Phone" text="+7(111)123456789" />
                    <div className='d-flex justify-content-between'>
                       <IconBox icon={<AiFillFacebook size={30} />} bg_color="#2270FC" text_color="#FFFFFF" icon_size="m-1 p-1" />
                       <IconBox icon={<AiOutlineTwitter size={30} />} bg_color="#2270FC" text_color="#FFFFFF" icon_size="m-1 p-1" />
                       <IconBox icon={<AiFillInstagram size={30} />} bg_color="#2270FC" text_color="#FFFFFF" icon_size="m-1 p-1" />
                       <IconBox icon={<AiFillLinkedin size={30} />} bg_color="#2270FC" text_color="#FFFFFF" icon_size="m-1 p-1" />
                    </div>
                </div>
                <div className='col-md-3 text-dark-blue'>
                  <h5 className='my-4 text-bold'>Download our API</h5>
                  <p className='text-gray mt-4'>
                     Start working with Homeradar that can provide everything you need
                  </p>
                  <TextButton text="App Store" icon={<AiFillApple />} btnclass="w-100" />
                  <TextButton text="App Store" icon={<FaGooglePlay />} btnclass="w-100" />
                </div>
            </div>
        </div>
        <div className='lower-footer bg-gray'>
            <div className='container pt-4 d-flex-between-center text-bold text-small'>
                <span className='text-dark-blue'>&copy;&nbsp;MyPlace 2022&nbsp;.All rights reserved.</span>
                <div className='text-blue'>
                    <span>Terms of use</span>&nbsp;&nbsp;
                    <span>Privacy Policy</span>&nbsp;&nbsp;
                    <span>Blog</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
