import React from "react";

//type Mystate= {students:any};
 export interface IState {
   days: any[];
 }


class Producttable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        days: [
           { 
             id: 1, 
             numdays:30,
             descrption:'LAST 30 days'
            },
            { 
             id: 2, 
             numdays:15,
             descrption:'LAST 15 days'
            },
            { 
             id: 3, 
             numdays:5,
             descrption:'LAST 05 days'
            }
           
        ]
     }
  }

  renderoptionData() {
     return this.state.days.map((daysnum, index) => {
        const { id, numdays,descrption} = daysnum //destructuring
        return (
           
               <option key={id} value={numdays}>{descrption}</option>
           
        )
     })
  }

  render() {
     return (
        <div id="dateselection">
           <select className="sel">
             {this.renderoptionData()}
            </select>
        </div>
     )
  }
}

export default Producttable;
