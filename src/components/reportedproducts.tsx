import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";

export interface IState {
    reported: any[];
  }
  

  class Verstat extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {reported: [
            { 
              id: 1,
              newrep: 2, 
              prevtotal: 6,
             },
            ]  
        }
    }

    renderReportsdata() {
        return this.state.reported.map((rep, index) => {
            
           const { id, prevtotal, newrep } = rep //destructuring
           var percentage, newtotal;
           return (
            <div key={id}>
            <div id="statinfo">
                <p>New: {newrep}</p>
                <p>Total: {newtotal = (newrep + prevtotal)}</p>
            </div>   
            <div id="statbar">
                <h3>+{Math.round(percentage = (newrep/prevtotal)*100) }%</h3>
                </div>
            </div>
           )
        })
     }


    render(){
        return(
                <Link to="/reported">
                <div className="stat">
                    <h3>Reported users and products</h3>
                    {this.renderReportsdata()}
                    
                    <div className="see-all">
                        
                        <span>See all Reports</span>
                        <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                        
                    </div>
                </div>   
                </Link>     
         )
    }                               
  }

  export default Verstat;