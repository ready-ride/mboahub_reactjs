import React from 'react'

import IconBox from '../../../components/common/IconBox/IconBox'

export default function WhyUsSectionItem({ title, content, icon }) {
  return (
    <div className='why-items mt-4'>
      <div className='why-item'>
        <IconBox icon={icon} text_color='white' bg_color='#3270FC' icon_size='p-4' />
        <div className='why-item-desc'>
          <h3 className='fourth-heading'>{title}</h3>
          {content}
        </div>
      </div>
    </div>
  )
}
