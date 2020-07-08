import React from "react";
import Stores from './storestats';
import Users from './userstats';
import Reportedproducts from './reportedproducts'


export interface IState {
    orders: any[];
  }


class Stats extends React.Component<{},IState>{
    render(){
        return(
            <div className="stat-cover">
                <Stores />
                <Users />
                <Reportedproducts />
            </div>
        )
    }
} 

export default Stats;