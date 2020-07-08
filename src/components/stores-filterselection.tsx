import React from "react";

//type Mystate= {students:any};
 export interface IState {
   filter: any[];
 }


class Producttable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        filter: [
           { 
             id: 1, 
             filter:'A-Z',
             descrption:'A-Z'
            },
            { 
             id: 2, 
             filter:'location',
             descrption:'location'
            },
            { 
             id: 3, 
             filter:'recently added',
             descrption:'recently added'
            },
            { 
             id: 4, 
             filter:'top selling',
             descrption:'top selling'
            },
            { 
             id: 5, 
             filter:'active',
             descrption:'active'
            },
            { 
             id: 6, 
             filter:'suspended',
             descrption:'suspended'
            },
            { 
             id: 7, 
             filter:'premium',
             descrption:'premium'
            },
            { 
             id: 8, 
             filter:'regular',
             descrption:'regular'
            }
        ]
     }
  }

  renderoptionData() {
     return this.state.filter.map((filtervalue, index) => {
        const { id, filter,descrption} = filtervalue //destructuring
        return (
           
               <option key={id} value={filter}>{descrption.toUpperCase()}</option>
           
        )
     })
  }

  render() {
     return (
        <div id="filterselection">
           <select className="sel">
             {this.renderoptionData()}
            </select>
        </div>
     )
  }
}

export default Producttable;
