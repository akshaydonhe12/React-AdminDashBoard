import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router,Route,Routes, } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import Mail from './pages/mail/Mail';
import NewUser from './pages/newUser/NewUser';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import ProductItem from './pages/productItem/ProductItem';
import Message from './pages/message/Message';
import Sale from './pages/sale/Sale';
import Analytics from './pages/analytics/Analytics';
import Feedback from './pages/feedback/Feedback';
import Transaction from './pages/transaction/Transaction';










function App() {
  return (
    <Router>
      <Topbar title="AdminDashboard"/>
      <div className="container">
        <Sidebar/> 
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route exact path="/mail" element={<Mail />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<ProductItem />} />
              <Route path="/message" element={<Message />} />
              <Route path="/sales" element={<Sale/>} />
              <Route path="/analytics" element={<Analytics/>} />
              <Route path="/feedback" element={<Feedback/>} />     
              <Route path="/transaction" element={<Transaction/>} />               

        </Routes>
        
        </div>
    
    </Router>
  );
}

export default App;
