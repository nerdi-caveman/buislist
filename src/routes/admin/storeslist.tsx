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
  storedetails: any[];
}


class Storestable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        storedetails: [
           { 
             id: 1, 
             store: 'Apple',
             location: 'Ibadan, Nigeria.',  
             owner: 'Tommy Shelby' ,  
             subscription: 'premium' ,
             status: 'active',
             img: Accessoriesbanner
            },
            { 
                id: 2, 
                store: 'Apple',
                location: 'Ibadan, Nigeria.',  
                owner: 'Tommy Shelby' , 
                subscription: 'premium' ,
                status: 'active',
                img: gadget
            },
            { 
                id: 3, 
                store: 'Apple',
                location: 'Ibadan, Nigeria.',  
                owner: 'Tommy Shelby' , 
                subscription: 'premium' ,
                status: 'suspended',
                img: tech
            }, 
        ]
     }
  }

  renderTableHeader() {
     return (
         <tr>
             <th>#</th>
             <th></th>
             <th>store</th>
             <th>location</th>
             <th>owner</th>
             <th>subscription</th>
             <th>status</th>
             <th></th>             
         </tr>
        
     ) 
  }

  renderTableData() {
     return this.state.storedetails.map((storedetail, index) => {
        const { id, img,store, location, owner,subscription,status} = storedetail //destructuring
        var statuscolor;
         if(status === 'active'){
            statuscolor = <span style={{color:'green'}}>Active</span>;
         } else if(status === 'suspended'){
            statuscolor = <span style={{color:'red'}}>Suspended</span>;
         }
        return (
           <tr key={id}>
              <td>{id}</td>
              <td style={{textAlign: 'center',}}><img src={img} /></td>
              <td>{store}</td>
              <td>{location}</td>
              <td>{owner}</td>
              <td>{subscription}</td>
               <td>{statuscolor}</td>
              <td>
                <div className="see-all">
                    <Link to={`/storeinfo/${storedetail.store}/${storedetail.id}`} style={{color: 'rgb(255, 90, 96)'}}>
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
                <h2>Stores</h2>
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

export default Storestable;
