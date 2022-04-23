import React from 'react';
import "./topbar.css";
import {Notifications,Language,Settings, PersonAdd} from '@mui/icons-material';


export default function Topbar(props) {
  return (
    <div className="topbar">
        <div className="topbarHeader">
            <div className="topLeft">
                <span className="logo">{props.title}</span>
            </div>
            <div className="topRight">
                <div className="topIconsContainer">
                    <Notifications />
                    <span className="TopIconBag">d</span>
                </div>

                <div className="topIconsContainer">
                    <Language />
                    <span className="TopIconBag">d</span>
                </div>

                <div className="topIconsContainer">
                    <Settings />
                </div>
                <div className="topIconsContainer">
                    <PersonAdd />
                </div>
            </div>
        </div>
    </div>
  )
}
