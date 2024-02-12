import React from 'react';

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillApple,
} from 'react-icons/ai';

import { MdOutlineLocationOn } from 'react-icons/md';
import { FaGooglePlay } from 'react-icons/fa';
import Logo from '../../common/Logo/Logo';
import ContactItem from '../../common/ContactItem/ContactItem';

import './Footer.scss';
import IconBox from '../../common/IconBox/IconBox';
import TextButton from '../../common/TextButton/TextButton';

function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="upper-footer row">
          <div className="col-sm">
            <Logo />
            <br />
            <div className="open-hours">
              <h5>Open Hours</h5>
              <strong className="text-blue text-dark-blue">
                Monday - Friday:
                {' '}
                <span className="text-blue">8am - 6pm</span>
              </strong>
              <br />
              <strong className="text-blue text-dark-blue">
                Saturday - Sunday:
                {' '}
                <span className="text-blue">9am - 3pm</span>
              </strong>
            </div>
            <br />
            <div className="d-flex justify-content-start">
              <IconBox icon={<AiFillFacebook size={20} />} bgColor="#2270FC" textColor="#FFFFFF" iconSize="m-1 p-1" />
              <IconBox icon={<AiOutlineTwitter size={20} />} bgColor="#2270FC" textColor="#FFFFFF" iconSize="m-1 p-1" />
              <IconBox icon={<AiFillInstagram size={20} />} bgColor="#2270FC" textColor="#FFFFFF" iconSize="m-1 p-1" />
              <IconBox icon={<AiFillLinkedin size={20} />} bgColor="#2270FC" textColor="#FFFFFF" iconSize="m-1 p-1" />
            </div>
          </div>
          {/* <div className='col-sm text-dark-blue'>
            <h5 className='my-4 text-bold'>Helpful links</h5>
            <ul className='helpful-links'>
              <li>About Our Company</li>
              <li className='mt-1'>Our last News</li>
              <li className='mt-1'>Pricing Plans</li>
              <li className='mt-1'>Contacts</li>
              <li>Help Center</li>
            </ul>
          </div> */}
          <div className="col-sm text-dark-blue">
            <br />
            <br />
            {' '}
            <br />
            <h5 className="mt-2 my-2 text-bold">Contact Info</h5>
            <ContactItem icon={<AiOutlineMail size="20" />} text="yourmail@domain.com" />
            <ContactItem icon={<MdOutlineLocationOn size="20" />} text="USA 27TH Brooklyn NY" />
            <ContactItem icon={<AiOutlinePhone size="20" />} text="+7(111)123456789" />
          </div>
          <div className="col-sm text-dark-blue">
            <br />
            <br />
            <br />
            <h5 className="mt-2 text-bold">Download our APP</h5>
            <TextButton text="App Store" icon={<AiFillApple />} btnclass="w-100" />
            <TextButton text="App Store" icon={<FaGooglePlay />} btnclass="w-100" />
          </div>
        </div>
      </div>
      <div className="lower-footer bg-gray">
        <br />
        <br />
        <br />
        <div className="container pt-4 d-flex-between-center text-bold text-small">
          <span className="text-dark-blue">&copy;&nbsp;MboaHub 2022&nbsp;.All rights reserved.</span>
          <div className="text-blue">
            <span>Terms of use</span>
&nbsp;&nbsp;
            <span>Privacy Policy</span>
&nbsp;&nbsp;
            <span>Blog</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
