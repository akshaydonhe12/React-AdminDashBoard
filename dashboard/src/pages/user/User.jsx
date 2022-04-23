import React from 'react';
import './user.css';
import { Link } from "react-router-dom";
import {PermIdentity,Mail,Home,PhoneInTalk,DateRange, Publish,} from '@mui/icons-material';

export default function User() {
  return (
    <div className="user">
       <div className="userTitleContainer">
           <h1 className="userTitle">Edit User</h1>
           <Link to="/newUser">
           <button className="userAddButton">Create</button>
           </Link>
       </div>

    <div className="userContainer">
        <div className="userShow">
            <div className="userTop">
                <img className="userShowImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="userJobTitle">
                    <span className="userShowName">Amella Keer</span>
                    <span className="userShowTitle">Web Developer</span>

                </div>
            </div>
            <div className="userBottom">
                    <span className="userShowUserTitle">Account Details</span>
                    <div className="userShowuserInfo">
                        <PermIdentity className="userShowuserShowIcon"/>
                        <span className="userShowInfo">amellkeerId</span>
                    </div>
                    <div className="userShowuserInfo">
                        <DateRange className="userShowuserShowIcon"/>
                        <span className="userShowInfo">12 Dec 2010</span>
                    </div>
                    <span className="userShowUserTitle">Contact Details</span>

                    <div className="userShowuserInfo">
                        <PhoneInTalk className="userShowuserShowIcon"/>
                        <span className="userShowInfo">+91 9876543210</span>
                    </div>
                    <div className="userShowuserInfo">
                        <Mail className="userShowuserShowIcon"/>
                        <span className="userShowInfo">amellekeer@gmail.com</span>
                    </div>
                    <div className="userShowuserInfo">
                        <Home className="userShowuserShowIcon"/>
                        <span className="userShowInfo">Mumbai | India</span>
                    </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label className="userUpdateDetail">UserName</label>
                        <input type="text" placeholder='amellaKeerId' className="userUpdateInput"></input>
                    </div>
                    <div className="userUpdateItem">
                        <label className="userUpdateDetail">Full Name</label>
                        <input type="text" placeholder='amellaKeer' className="userUpdateInput"></input>
                    </div>
                    <div className="userUpdateItem">
                        <label className="userUpdateDetail">Email</label>
                        <input type="email" placeholder='amellekeer@gmail.com' className="userUpdateInput"></input>
                    </div>
                    <div className="userUpdateItem">
                        <label className="userUpdateDetail">Phone</label>
                        <input type="text" placeholder='9876543210' className="userUpdateInput"></input>
                    </div>
                    <div className="userUpdateItem">
                        <label className="userUpdateDetail">Address</label>
                        <input type="text" placeholder='Mumbai | India' className="userUpdateInput"></input>
                    </div>
                </div>

                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className="userUpdateImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <lable htmlFor="file">
                            <Publish className="userUpdateIcon"/>
                        </lable>
                        <input type="file" id="file" style={{display: 'none'}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>

                </div>

            </form>
            
        </div>

    </div>

    </div>
  )
}
