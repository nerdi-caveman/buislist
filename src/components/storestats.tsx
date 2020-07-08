import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";

export interface IState {
    stores: any[];
  }

  class Storestat extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {stores: [
            { 
              id:1,
              newstore: 4, 
              prevtotal: 20
             },
            ]  
        }
    }

    renderOrderdata() {
        return this.state.stores.map((store, index) => {
           const { id, newstore, prevtotal } = store //destructuring
           var percentage,newtotal;
           return (
            <div key={id}>   
                
                <div id="statinfo">
                <p>New: {newstore}</p>
                <p>Total: {newtotal = prevtotal + newstore}</p>
                </div>
                <div id="statbar">
                <h3>+{Math.round(percentage = (newstore/prevtotal)*100) }%</h3>
                </div>
            </div>
           )
        })
     }


    render(){
        return( 
                <Link to="/stores">
                <div className="stat">
                    <h3>Stores</h3>
                    {this.renderOrderdata()}
                    <div className="see-all">
                        <span>See all Stores</span>
                        <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                    </div>
                </div>    
                </Link>    
         )
    }                               
  }

  export default Storestat;