import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import gadget from "../../assets/top-view-photo-of-laptop-near-camera-3178938.jpg";
import tech from "../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";

export interface IState {
    userdetails: any[];
    productstoredetails: any[];
    TabView:boolean;
    bgcolor:boolean;
  }

  class Reportedpage extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {
            TabView: true,
            bgcolor:true,
            userdetails: [
                { 
                  id: 1, 
                  store: 'Apple',
                  location: 'Ibadan, Nigeria.',  
                  user: 'Tommy Shelby' ,  
                  subscription: 'premium' ,
                  reasonforreport:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                  complainamt: 5,
                  img: Accessoriesbanner
                 },
                 { 
                    id: 2, 
                    store: 'Apple',
                    location: 'Ibadan, Nigeria.',  
                    user: 'Tommy Shelby' ,  
                    subscription: 'regular' ,
                    reasonforreport:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    complainamt: 5,
                    img: Accessoriesbanner
                   }  
             ],
            productstoredetails: [
                { 
                    id:1,
                    prodimg:Accessoriesbanner ,
                    product:'Headphones',
                    category:'Phones, pcs & Gadgets',
                    store:'apple',
                    complainamt:5,
                    reasonforreport:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                },
                { 
                    id:2,
                    prodimg:gadget ,
                    product:'Camera',
                    category:'Phones, pcs & Gadgets',
                    store:'apple',
                    complainamt:5,
                    reasonforreport:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                },
                { 
                    id:3,
                    prodimg:tech ,
                    product:'Laptop',
                    category:'Phones, pcs & Gadgets',
                    store:'apple',
                    complainamt:5,
                    reasonforreport:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                }
            ],
        }
        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.handleProdClick = this.handleProdClick.bind(this);
    }

    

     handleInfoClick() {
        this.setState({TabView: true, bgcolor:true});
      }
    
      handleProdClick() {
        this.setState({TabView: false,bgcolor:false});
      }



      renderUTableHeader() {
        return (
            <tr>
                <th>#</th>
                <th></th>
                <th>user</th>
                <th>store</th>
                <th>location</th>
                <th>no. of complaints</th>
                <th>Complaint</th>
                <th></th>             
            </tr>
           
        ) 
     }
   
     renderUTableData() {
        return this.state.userdetails.map((userdetail, index) => {
           const { id, img,store, location, user,reasonforreport,complainamt} = userdetail //destructuring
   
         
   
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td style={{textAlign: 'center',}}><img src={img} /></td>
                 <td>{user}</td>
                 <td>{store}</td>
                 <td>{location}</td>
                 <td>{complainamt}</td>
                 <td>{reasonforreport}</td>
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


     renderPTableHeader() {
        return (
            <tr>
                <th>#</th>
                <th></th>
                <th>product</th>
                <th>category</th>
                <th>Store</th>
                <th>no. of complaints</th>
                <th>complaint</th> 
                <th></th>           
            </tr>
           
        ) 
     }

     renderPTableData() {
        return this.state.productstoredetails.map((storedetail, index) => {
           const { id ,prodimg,product,category,store,complainamt,reasonforreport} = storedetail //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td style={{textAlign: 'center',}}><img src={prodimg} /></td>
                 <td>{product}</td>
                 <td>{category}</td>
                 <td>{store}</td>
                 <td>{complainamt}</td>
                 <td>{reasonforreport}</td>
                 <td>
                <div className="see-all">
                    <Link to={`/storeinfo/${storedetail.store}/${storedetail.sn}`} style={{color: 'rgb(255, 90, 96)'}}>
                    View Details
                    <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                    </Link>
                </div>
              </td>
              </tr>
           )
        })
     }

     renderUserDetails() {
        return (
         <div id="product-details"> 
             <div id="info-table">
             <table>
                 <tbody>
                     {this.renderUTableHeader()}
                     {this.renderUTableData()}
                 </tbody>
             </table>
             </div>
             
             
         </div>
        )
  }

     renderProductDetails() {
           return (
            <div id="product-details"> 
                <div id="info-table">
                <table>
                    <tbody>
                        {this.renderPTableHeader()}
                        {this.renderPTableData()}
                    </tbody>
                </table>
                </div>
                
                
            </div>
           )
     }

     
     //toggle page rendered basic info|product info
    render(){
        const TabView = this.state.TabView;
        let content;
        if (TabView) {      
            content = this.renderUserDetails() ;    
        } else {      
            content = this.renderProductDetails();    
        }
        
        //button bg color
        const bgcolor = this.state.bgcolor;

        return(
                <div id="store-details">
                        <div id="tab-cover">
                            <button 
                                style={{
                                    backgroundColor: bgcolor ? 'black' : 'white',
                                    color: bgcolor ? 'white' : 'black',
                                        }} 
                                onClick={this.handleInfoClick}>Users</button>
                            <button 
                                style={{
                                    backgroundColor: bgcolor ? 'white' : 'black',
                                    color: bgcolor ? 'black' : 'white',
                                       }} 
                                onClick={this.handleProdClick}>Products</button>
                        </div>
                        {content}
                </div>        
         )
    }                               
  }

  export default Reportedpage;