import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {
  const Button =({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  } 
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">
              Latest Transactions
              <table className="widgetTable">
                <tbody>
                <tr className="widgetLgTr">
                  <th className="widgetLgTh">Customer</th>
                  <th className="widgetLgTh">Date</th>
                  <th className="widgetLgTh">Amount</th>
                  <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img className="widgetLgImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      <span className="widgetLgName">Amella keer</span>
                    </td>
                    <td className="widgetDate">12 Dec 2012</td>
                    <td className="widgetAmount">$ 1000</td>
                    <td className="widgetStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img className="widgetLgImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      <span className="widgetLgName">Amella keer</span>
                    </td>
                    <td className="widgetDate">12 Dec 2012</td>
                    <td className="widgetAmount">$ 1000</td>
                    <td className="widgetStatus">
                        <Button type="Decliend" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img className="widgetLgImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      <span className="widgetLgName">Amella keer</span>
                    </td>
                    <td className="widgetDate">12 Dec 2012</td>
                    <td className="widgetAmount">$ 1000</td>
                    <td className="widgetStatus">
                        <Button type="Rejected" />
                    </td>
                </tr>
                    
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img className="widgetLgImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      <span className="widgetLgName">Amella keer</span>
                    </td>
                    <td className="widgetDate">12 Dec 2012</td>
                    <td className="widgetAmount">$ 1000</td>
                    <td className="widgetStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                </tbody>
              </table>
        </h3>
    </div>
  )
}