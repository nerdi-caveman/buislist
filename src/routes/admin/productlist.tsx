import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import gadget from "../../assets/top-view-photo-of-laptop-near-camera-3178938.jpg";
import tech from "../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import Searchbar from "../../components/adminsearchbar";
import Filter from "../../components/stores-filterselection";

//type Mystate= {students:any};
export interface IState {
  productdetails: any[];
}


class Producttable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        productdetails: [
               { 
                  id:1,
                  prodimg:Accessoriesbanner ,
                  product:'Headphones',
                  category:'Phones, pcs & Gadgets',
                  totalsold:50,
                  pendingorders:5,
            },
            { 
                  id:2,
                  prodimg:gadget ,
                  product:'Camera',
                  category:'Phones, pcs & Gadgets',
                  totalsold:50,
                  pendingorders:5,
            },
            { 
                  id:3,
                  prodimg:tech ,
                  product:'Laptop',
                  category:'Phones, pcs & Gadgets',
                  totalsold:50,
                  pendingorders:5,
            }
        ]
     }
  }

  renderTableHeader() {
     return (
      <tr>
         <th>#</th>
         <th></th>
         <th>product</th>
         <th>category</th>
         <th>total sold</th>
         <th>pending orders</th> 
         <th></th>           
   </tr>
        
     ) 
  }

  renderTableData() {
      return this.state.productdetails.map((proddetail, index) => {
         const { id ,prodimg,product,category,totalsold,pendingorders} = proddetail //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td style={{textAlign: 'center',}}><img src={prodimg} /></td>
               <td>{product}</td>
               <td>{category}</td>
               <td>{totalsold}</td>
               <td>{pendingorders}</td><td>
            <div className="see-all">
                  <Link to={`/productinfo/${proddetail.store}/${proddetail.sn}`} style={{color: 'rgb(255, 90, 96)'}}>
                  View Details
                  <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                  </Link>
            </div>
            </td>
            </tr>
         )
      })
   }

  render() {
     return (
        <div id="info-table">
            <div className="info-head">
                <h2>Products</h2>
                <span>
                    <Filter />
                    <Searchbar />
                </span>
                
            </div>
           <table>
              <tbody>
                 {this.renderTableHeader()}
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

export default Producttable;
