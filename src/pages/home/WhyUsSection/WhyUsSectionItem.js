import React from 'react';

import IconBox from '../../../ui-components/IconBox/IconBox';

export default function WhyUsSectionItem({title, content, icon}) {
  return (
    <div className='why-items mt-4'>
        <div className='why-item'>
            <IconBox icon={icon} text_color="white" bg_color="#3270FC" icon_size="p-4" />
            <div className='why-item-desc'>
                 <div className='fourth-heading'>{title}</div>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </div>
  )
};
