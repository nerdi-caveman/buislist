import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";

export interface IState {
    verifications: any[];
  }
  

  class Verstat extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {verifications: [
            { 
              id: 1,
              newv: 4, 
              prevtotal: 12,
             },
            ]  
        }
    }

    renderVerificationdata() {
        return this.state.verifications.map((ver, index) => {
            
           const { id, prevtotal, newv } = ver //destructuring
           var percentage, newtotal;
           return (
            <div key={id}>
            <div id="statinfo">
                <p>Pending: {newv}</p>
                <p>Total: {newtotal = (newv + prevtotal)}</p>
            </div>   
            <div id="statbar">
                <h3>+{Math.round(percentage = (newv/prevtotal)*100) }%</h3>
                </div>
            </div>
           )
        })
     }


    render(){
        return(
                <Link to="">
                <div className="stat">
                    <h3>Verification requests</h3>
                    {this.renderVerificationdata()}
                    
                    <div className="see-all">
                        
                        <span>See all Requests</span>
                        <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                        
                    </div>
                </div>   
                </Link>     
         )
    }                               
  }

  export default Verstat;