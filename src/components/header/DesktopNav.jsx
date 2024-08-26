import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const DesktopNav = ({menuItems, Logo}) => {
    const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu, index)=>(
                    <li key={index}>
                        <Link to={menu} className='font-medium capitalize text-secondary' >{menu}</Link>
                    </li>
                ))
            }
            
        </ul>

        {/* login and sign up button */}



        <ul className='flex items-center gap-4 font-medium'>
            <Link to='/profile'>
                {currentUser ? (
                    <img src={currentUser.profilePicture} alt="profile" className='h-10 w-10 rounded-full object-cover' />
                ): (
                    <li>
                    <button className='text-secondary px-4 py-2 rounded '>Sign In</button>
                    </li>
                )}
               
            </Link>
            
            {/* <Link to='/sign-up'>
                {currentUser ? (
                    <img src={currentUser.profilePicture} alt="" />
                ): (
                    <li>
                    <button className='text-secondary px-4 py-2 rounded '>Sign Up</button>
                    </li>
                )}
               
            </Link> */}

        </ul>


    </div>
  )
}

export default DesktopNav