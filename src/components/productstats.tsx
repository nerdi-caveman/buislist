import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";

export interface IState {
    inventory: any[];
  }
  

  class Orderstat extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {inventory: [
            { 
              id: 1,
              newp: 4, 
              prevtotal: 70,
             },
            ]  
        }
    }

    renderInventorydata() {
        return this.state.inventory.map((inv, index) => {
            
           const { id, prevtotal, newp } = inv //destructuring
           var percentage, newtotal;
           return (
            <div key={id}>
            <div id="statinfo">
                <p>New: {newp}</p>
                <p>Total: {newtotal = (newp + prevtotal)}</p>
            </div>   
            <div id="statbar">
                <h3>+{Math.round(percentage = (newp/prevtotal)*100) }%</h3>
                </div>
            </div>
           )
        })
     }


    render(){
        return(
                <div className="stat">
                    <h3>Products</h3>
                    {this.renderInventorydata()}
                    
                    <div className="see-all">
                        <Link to="">
                        See all Products
                        <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                        </Link>
                    </div>
                </div>        
         )
    }                               
  }

  export default Orderstat;