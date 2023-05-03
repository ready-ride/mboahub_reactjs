import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './MyProfile.scss'
import { userStatus } from '../../../services/UserServices';
import { useSingleImageUpload } from '../../../hooks/images/useUploadImage'; 

import FormInput from '../../../components/forms/FormInput';

import { FaUser, FaRegUser, FaBuilding, FaShieldAlt, FaKey } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineMail, AiOutlinePhone,AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import TextAreaInput from '../../../components/forms/TextAreaInput';

function MyProfile() {
  const hiddenFileInput = React.useRef(null);
  const hiddenCoverFileInput = React.useRef(null);
  
    let token = userStatus();
    token = token && token.token;

    if(!token){
       return <Navigate to="/signin" />
    }

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleCoverClick = event => {
    hiddenCoverFileInput.current.click();
  }

  const { 
    imageUrl, 
    imageLoading, 
    imageCoverUrl, 
    imageCoverLoading, 
    handleImageUpload, 
    handleCoverImageUpload 
  } = useSingleImageUpload();

  const backgroundImage = 'https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg';
  const avatar = '/photos/avatar.png'

  return (
    <div className='my-profile'>
        <strong className='text-dark-blue mb-4'>EDIT PROFILE</strong>
        <hr />
        <div className='d-flex-between-start'>
            <div className='my-profile-left-container'>
                <div className='my-profile-left'>
                    <strong className="d-flex align-items-center text-blue">
                        <FaUser size="15px" />
                        &nbsp;&nbsp;
                        <span className="text-gray text-small">Change Avatar</span>
                    </strong>
                    <div className='avatar-container' style={{backgroundImage: `url(${imageCoverUrl ? imageCoverUrl : backgroundImage})`}}>
                    <div className='bg-light-dark'></div>
                    <div className='agent-avatar'>
                        <img alt="user avatar" src={`${imageUrl ? imageUrl: avatar}`} width='80px' height='80px' />
                        &nbsp;&nbsp;
                        <span
                            role='button'
                            className='text-white text-small'
                            onClick={handleClick}
                            >
                            { imageLoading ? 'uploading ...' : 'Upload New Photo' }
                        </span>

                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className='agent-cover-image'>
                        <span
                            role='button'
                            className='text-white text-small bg-blue rounded-top'
                            onClick={handleCoverClick}
                            >
                            { imageCoverLoading ? 'uploading ...' : 'Change Cover' }
                        </span>

                        <input
                            type="file"
                            ref={hiddenCoverFileInput}
                            onChange={handleCoverImageUpload}
                        />
                    </div>
                    </div>
                </div>
                <div className='personal-info'>
                    <div className='perfornal-info-heading border-bottom'>
                        <strong className='text-dark-blue text-small p-4'>Personal Info</strong>
                    </div>
                    <div className='perfornal-info-form px-4 pb-4'>
                        <form>
                            <FormInput handleChange={''} data={''} name="first_name" type="text" label="First Name" icon={<FaRegUser size={15} />} />
                            <FormInput handleChange={''} data={''} name="last_name" type="text" label="Last Name" icon={<FaRegUser size={15} />} />
                            <FormInput handleChange={''} data={''} name="email" type="text" label="Email Address" icon={<AiOutlineMail size={15} />} />
                            <FormInput handleChange={''} data={''} name="phone" type="text" label="Phone" icon={<AiOutlinePhone size={15} />} />
                            <FormInput handleChange={''} data={''} name="agency" type="text" label="Agency" icon={<FaBuilding size={15} />} />
                            <TextAreaInput name="about_me" label="About Me" data={''} handleChange={''} />
                            <button className='text-white bg-blue py-2 px-4 mt-4 rounded'>Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='my-profile-right'>
                <div className='rounded mb-4'>
                    <div className='personal-info'>
                        <div className='persornal-info-heading border-bottom'>
                            <strong className='text-gray text-small'>
                              <FaKey size={14} />
                              &nbsp;&nbsp;
                              Change Password
                            </strong>
                        </div>
                        <div className='perfornal-info-form px-4 pb-4'>
                            <form>
                                <FormInput handleChange={''} data={''} name="current_password" type="text" label="Current Password" icon={<AiOutlineUnlock size={15} />} />
                                <FormInput handleChange={''} data={''} name="new_password" type="text" label="New Password" icon={<AiOutlineLock size={15} />} />
                                <FormInput handleChange={''} data={''} name="confirm_password" type="text" label="Confirm Password" icon={<FaShieldAlt size={15} />} />
                                <button className='text-white bg-blue py-2 px-4 mt-3 rounded'>Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='rounded mt-4'>
                    <div className='personal-info'>
                        <div className='perfornal-info-heading border-bottom'>
                            <strong className='text-dark-blue text-small'>Your Socials</strong>
                        </div>
                        <div className='perfornal-info-form px-4 pb-4'>
                            <form>
                                <FormInput handleChange={''} data={''} name="facebook" type="text" label="Facebook" icon={<BsFacebook size={15} />} />
                                <FormInput handleChange={''} data={''} name="twitter" type="text" label="Twitter" icon={<BsTwitter size={15} />} />
                                <FormInput handleChange={''} data={''} name="instagram" type="text" label="Instagram" icon={<AiFillInstagram size={15} />} />
                                <button className='text-white bg-blue py-2 px-4 mt-3 rounded'>Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile;
