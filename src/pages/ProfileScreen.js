import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import { auth } from '../firebase';
import './ProfileScreen.css';

function ProfileScreen() {

    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>

                <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' 
                alt='avatar' 
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <div className='oneplan'>
                        <div>
                            <p>Netflix Standard</p>
                            <p>1080p</p>
                        </div>
                        <button className='buy-button'>Subscribe</button>
                        </div>

                        <div className='oneplan'>
                        <div>
                            <p>Netflix Standard</p>
                            <p>1080p</p>
                        </div>
                        <button className='buy-button'>Subscribe</button>
                        </div>

                        <div className='oneplan'>
                        <div>
                            <p>Netflix Standard</p>
                            <p>1080p</p>
                        </div>
                        <button className='buy-button'>Subscribe</button>
                        </div>
                        <button 
                        onClick={ ()=>{ auth.signOut()} }
                        className='profileScreen__signOut'>SignOut</button>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default ProfileScreen;