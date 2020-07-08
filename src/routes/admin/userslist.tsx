import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import gadget from "../../assets/top-view-photo-of-laptop-near-camera-3178938.jpg";
import Searchbar from "../../components/adminsearchbar";
import Filter from "../../components/users-filterselection";

//type Mystate= {students:any};
export interface IState {
  userdetails: any[];
}


class Userstable extends React.Component<{},IState> {
  constructor(props:any) {
     super(props)
     this.state = {
        userdetails: [
           { 
             id: 1, 
             store: 'Apple',
             location: 'Ibadan, Nigeria.',  
             user: 'Tommy Shelby' ,  
             subscription: 'premium' ,
             status: 'active',
             verification:true,
             img: Accessoriesbanner
            },
            { 
               id: 2, 
               store: 'Apple',
               location: 'Ibadan, Nigeria.',  
               user: 'Tommy Shelby' ,  
               subscription: 'regular' ,
               status: 'suspended',
               verification:false,
               img: gadget
              }  
        ]
     }
  }

  renderTableHeader() {
     return (
         <tr>
             <th>#</th>
             <th></th>
             <th>user</th>
             <th>store</th>
             <th>location</th>
             <th>verification</th>
             <th>status</th>
             <th></th>             
         </tr>
        
     ) 
  }

  renderTableData() {
     return this.state.userdetails.map((userdetail, index) => {
        const { id, img,store, location, user,status,verification} = userdetail //destructuring

      var statuscolor;
      if(status === 'active'){
         statuscolor = <span style={{color:'green'}}>Active</span>;
      } else if(status === 'suspended'){
         statuscolor = <span style={{color:'red'}}>Suspended</span>;
      }

      var verificationstatus;
      if(verification === true){
         verificationstatus = 'Verified';
      } else if(verification === false){
         verificationstatus = 'Pending';
      }


        return (
           <tr key={id}>
              <td>{id}</td>
              <td style={{textAlign: 'center',}}><img src={img} /></td>
              <td>{user}</td>
              <td>{store}</td>
              <td>{location}</td>
              <td>{verificationstatus}</td>
              <td>{statuscolor}</td>
              <td>
                <div className="see-all">
                    <Link to={`/userinfo/${userdetail.store}/${userdetail.id}`} style={{color: 'rgb(255, 90, 96)'}}>
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
                <h2>Users</h2>
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

export default Userstable;
