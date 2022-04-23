import React from 'react';
import './newUser.css'

export default function NewUser() {
  return (
    <div className="newUser">
       <h1 className="newUserTitle">
            New User
       </h1>
       <form className="newUserform">
           <div className="newUserItem">
               <lable className="newUserLable">Username</lable>
               <input type="text" placeholder="Enter your Username" className="newUserInput"></input>
           </div>
           <div className="newUserItem">
               <lable className="newUserLable">Full name</lable>
               <input type="text" placeholder="Enter your Full name" className="newUserInput"></input>
           </div>
           <div className="newUserItem">
               <lable className="newUserLable">Email</lable>
               <input type="email" placeholder="Enter your email" className="newUserInput"></input>
           </div>
           <div className="newUserItem">
               <lable className="newUserLable">Password</lable>
               <input type="password" placeholder="Enter your epassword" className="newUserInput"></input>
           </div>
           <div className="newUserItem">
               <lable className="newUserLable">Phone</lable>
               <input type="text" placeholder="Enter your Phone Number" className="newUserInput" ></input>
           </div>
           <div className="newUserItem">
               <lable className="newUserLable">Address</lable>
               <input type="text" placeholder="Enter your Address" className="newUserInput"></input>
           </div>
           <div className="newUserItem">
               <div className="newUserGender">
                    <lable className="newUserGenderLable" >Gender</lable>
                    <input type="radio" className="newUserGenderInput" name="gender" id="male" value="male"></input>
                    <lable for="male" className="newUserGenderLable" >Male</lable>
                    <input type="radio" className="newUserGenderInput" name="gender" id="female" value="female"></input>
                    <lable for="female"className="newUserGenderLable"  >Female</lable>
                    <input type="radio" className="newUserGenderInput" name="gender" id="other" value="other"></input>
                    <lable for="other"   className="newUserGenderInput">Other</lable>
               </div>
           </div>

           <div className="newUserItem">
               <lable>Active</lable>
               <select className="newUSerSelect" name="active" id="active">
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
               </select>
           </div>
           <button className="newUserButton">Create</button>
       </form>
    </div>
  )
}
