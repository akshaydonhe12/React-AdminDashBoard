import React from 'react';
import './sidebar.css';
import {Link } from 'react-router-dom';
import {FormatListBulleted, Timeline, TrendingUp,Person,Message,ManageAccounts, Feedback, Mail, ProductionQuantityLimits, Paid, Report} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="siderbarWrapper">

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" style={{ textDecoration: 'none',color: '#555'  }}>
                        <li className="sidebarListItem active">
                            <FormatListBulleted className="sidebarIcons"/> <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/analytics" style={{ textDecoration: 'none',color: '#555'  }}>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" /> <span>Analytics</span>
                        </li>
                     </Link>
                    <Link to="/sales" style={{ textDecoration: 'none',color: '#555'  }}>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" /> <span>Sales</span>
                        </li>
                    </Link>
                </ul>        
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" style={{ textDecoration: 'none',color: '#555'}}>
                    <li className="sidebarListItem ">
                       <Person className="sidebarIcons"/> <span>Users</span>
                    </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: 'none',color: '#555'}}>
                        <li className="sidebarListItem">
                            <ProductionQuantityLimits  className="sidebarIcons" /> <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/transaction" style={{ textDecoration: 'none',color: '#555'}}>
                    <li className="sidebarListItem">
                        <Paid className="sidebarIcons" /> <span>Transactions</span>
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcons" /> <span>Reports</span>
                    </li>
                </ul>       
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <Link to="/mail" style={{ textDecoration: 'none',color: '#555'  }}>
                    <li className="sidebarListItem ">
                        <Mail className="sidebarIcons"/> <span>Mail</span>
                    </li>
                    </Link>
                    <Link to="/feedback" style={{ textDecoration: 'none',color: '#555'  }}>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcons" /> <span>Feedback</span>
                    </li>
                    </Link>
                    <Link to="/message" style={{ textDecoration: 'none',color: 'inherit'}}>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcons" /> <span>Message</span>
                        </li>
                    </Link>
                </ul>        
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccounts className="sidebarIcons"/> <span>Manage</span>
                    </li>

                    <li className="sidebarListItem">
                        <Report className="sidebarIcons" /> <span>Reports</span>
                    </li>
                </ul>        
            </div>

            

        </div>
    </div>
  )
}
