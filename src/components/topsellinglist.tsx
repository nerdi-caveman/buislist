import React from "react";

//type Mystate= {students:any};
export interface IState {
  students: any[];
}


class Producttable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        students: [
           { 
             sn: 1, product: 'Fairly used iPhone 11, 128gb, black', 
             category: 'Phones, pcs & Gadgets', 
             store: 'Apple', 
             location: 'Ibadan, Nigeria.',
             sold: 35 
            },
            { 
              sn: 2, product: 'Fairly used iPhone 11, 128gb, black', 
              category: 'Phones, pcs & Gadgets', 
              store: 'Apple', 
              location: 'Ibadan, Nigeria.',
              sold: 35 
             },
             { 
              sn: 3, product: 'Fairly used iPhone 11, 128gb, black', 
              category: 'Phones, pcs & Gadgets', 
              store: 'Apple', 
              location: 'Ibadan, Nigeria.',
              sold: 35 
             },
             { 
              sn: 4, product: 'Fairly used iPhone 11, 128gb, black', 
              category: 'Phones, pcs & Gadgets', 
              store: 'Apple', 
              location: 'Ibadan, Nigeria.',
              sold: 35 
             },
             { 
              sn: 5, product: 'Fairly used iPhone 11, 128gb, black', 
              category: 'Phones, pcs & Gadgets', 
              store: 'Apple', 
              location: 'Ibadan, Nigeria.',
              sold: 35 
             },
             { 
               sn: 6, product: 'Fairly used iPhone 11, 128gb, black', 
               category: 'Phones, pcs & Gadgets', 
               store: 'Apple', 
               location: 'Ibadan, Nigeria.',
               sold: 35 
              },
              { 
                sn: 7, product: 'Fairly used iPhone 11, 128gb, black', 
                category: 'Phones, pcs & Gadgets', 
                store: 'Apple', 
                location: 'Ibadan, Nigeria.',
                sold: 35 
               },
               { 
                sn: 8, product: 'Fairly used iPhone 11, 128gb, black', 
                category: 'Phones, pcs & Gadgets', 
                store: 'Apple', 
                location: 'Ibadan, Nigeria.',
                sold: 35 
               },
               { 
                sn: 9, product: 'Fairly used iPhone 11, 128gb, black', 
                category: 'Phones, pcs & Gadgets', 
                store: 'Apple', 
                location: 'Ibadan, Nigeria.',
                sold: 35 
               },
               { 
                sn: 10, product: 'Fairly used iPhone 11, 128gb, black', 
                category: 'Phones, pcs & Gadgets', 
                store: 'Apple', 
                location: 'Ibadan, Nigeria.',
                sold: 35 
               }
           
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.students.map((student, index) => {
        const { sn, product, category, store, location, sold } = student //destructuring
        return (
           <tr key={sn}>
              <td>{sn}</td>
              <td>{product}</td>
              <td>{category}</td>
              <td>{store}</td>
              <td>{location}</td>
              <td>{sold}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <table>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

export default Producttable;
