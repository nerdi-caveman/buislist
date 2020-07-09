import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";

export interface IState {
    customer: any[];
  }
  

  class Orderstat extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {customer: [
            { 
              id: 1,
              newc: 4, 
              prevtotal: 50,
              verificationrequests: 2
             }
            ] 
        }
    }

    renderCustomerdata() {
        return this.state.customer.map((customers, index) => {
           const { id, newc, prevtotal,verificationrequests } = customers //destructuring
           var percentage,newtotal;
           return (
            <div key={id}>   
                <div id="statinfo">
                <p>New: {newc}</p>
                <p>Total: {newtotal = newc + prevtotal}</p>
                <p>Verification requests: {verificationrequests}</p>
                </div>
                <div id="statbar">
                    <h3>+{Math.round(percentage = (newc/prevtotal)*100) }%</h3>
                </div>
            </div>
           )
        })
     }


    render(){
        return(
                <Link to="/users">
                <div className="stat">
                    <h3>Users</h3>
                    {this.renderCustomerdata()}
                    <div className="see-all">
                        
                        <span>See all Users</span>
                        <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                        
                    </div>
                </div>     
                </Link>   
         )
    }                               
  }

  export default Orderstat;