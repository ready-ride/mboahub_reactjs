import React from 'react';
import { Link } from 'react-router-dom';

import { BsDot } from 'react-icons/bs';

import ActionButton from '../../components/common/ActionButton/ActionButton';

import './BreadCrumb.css';

function BreadCrumb() {
  let pathname = window.location.pathname;
  let path = pathname.replace('/', '',).replace('_', ' ',).split(' ');
  path = path[0] !== '' && path.map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');

  return (
    <section className='breadcrumb-section shadow'>
        <div className='container'>
           <div>
              <Link to='/' className='text-blue'>Home</Link>
              <Link to={pathname} className='text-blue'>
                  <span className='text-blue'>
                    {path && <BsDot size="30" />}
                  </span>
                {path}
              </Link>
           </div>
           <ActionButton text="Share" />
        </div>
    </section>
  )
}

export default BreadCrumb;
