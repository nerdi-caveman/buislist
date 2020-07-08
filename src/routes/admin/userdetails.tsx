import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiMapMarker, mdiPhone, mdiMail,mdiChevronRight,mdiCloseBox } from "@mdi/js";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import gadget from "../../assets/top-view-photo-of-laptop-near-camera-3178938.jpg";
import tech from "../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import owner from "../../assets/people-near-vegetable-display-2919590.jpg";
import Storeincome from "../../components/storeincomechart";

export interface IState {
    userdetails: any[];
    stores: any[];
    popupvisibility:boolean;
  }

  class Userdetails extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {
            popupvisibility:false,
            userdetails: [
                { 
                id:1,
                name: 'Tommy Shelby', 
                gender:'male',
                dateofbirth:'01-01-2020',
                email:'tshelby@gmail.com',
                phonenumber:'023023201232',
                verification:true,
                location:'Ibadan, Nigeria.',  
                bio:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sint dolores reprehenderit eveniet voluptatum maiores sequi, quibusdam tempore itaque inventore, dolore, quis quae id similique consequatur hic! Non, quas tempora.',
                userimg: owner,
                }
            ] ,
            stores: [
                { 
                    id: 1, 
                    store: 'Apple',
                    subscription: 'premium' ,
                    status: 'active',
                    img: Accessoriesbanner
                   },
                   { 
                       id: 2, 
                       store: 'Apple',
                       subscription: 'premium' ,
                       status: 'suspended',
                       img: gadget
                   },
                   { 
                       id: 3, 
                       store: 'Apple',
                       subscription: 'premium' ,
                       status: 'suspended',
                       img: tech
                   }
            ]
        }
        this.PopupforSuspension = this.PopupforSuspension.bind(this);
        this.closePopupforSuspension = this.closePopupforSuspension.bind(this);
    }
    

    PopupforSuspension(){
        this.setState({popupvisibility: true});
    }

    closePopupforSuspension(){
        this.setState({popupvisibility: false});
    }

    renderPopup(){

        const popupvisibility = this.state.popupvisibility;
        return(
            <div id="suspendpopup" style={{display: popupvisibility ? 'inline-block' : 'none',}}>
                <span id="spopop-close" onClick={this.closePopupforSuspension}><Icon path={mdiCloseBox} color="#ff5a60" size={1.2} /></span>
                <p>Are you sure you want to suspend this user?</p>
                <button id="s-yes" className="btn btn-md btn-primary">YES</button>
                <button id="s-no" className="btn btn-md btn-primary">NO</button>
            </div>
        )
    }

      renderBasicDetails() {
        return this.state.userdetails.map((user, index) => {
           const { id, name, location, userimg,bio,phonenumber,email,gender,dateofbirth,verification } = user //destructuring
                  
           var verbox;
            if(verification === false){
                verbox = <div id="verify-false">
                            <p>Verify ?</p>
                            <button id="v-yes" className="btn btn-md btn-primary">YES</button>
                            <button id="v-no" className="btn btn-md btn-primary">NO</button>
                        </div>;
            } else {
                verbox = <div id="verify-true">VERIFIED</div>;
            }

           return (
            <div>
                <div key={id} id="basic-details">     
                    <div id="b-img">
                        <img src={userimg} />
                        <p id='loc-icon'>
                            <Icon path={mdiMapMarker} color="#ff5a60" size={.9} />
                            <span>{location}</span>
                        </p>
                    </div>
                    <div id="basic-content">
                        <h2>{name}</h2>
                        <p>{gender}</p>
                        <p>born {dateofbirth}</p>
                        <p className="u-info-icon">
                            <Icon path={mdiMail} color="#ff5a60" size={.9} />
                            <span>{email}</span>
                        </p>
                        <p className="u-info-icon">
                            <Icon path={mdiPhone} color="#ff5a60" size={.9} />
                            <span>{phonenumber}</span>
                        </p>
                        <p>{bio}</p>
                        <hr/>
                        <div key={id} id="verification-box"> 
                            {verbox}
                        </div>                 
                        <button onClick={this.PopupforSuspension} id="suspendbutton" className="btn btn-md btn-primary">Suspend</button>
                    </div>

                    
                </div>
                
            </div>    
           )
        })
     }


     renderTableHeader() {
        return (
            <tr>
                <th>#</th>
                <th></th>
                <th>store</th>
                <th>subscription</th>
                <th>status</th>      
                <th></th>       
            </tr>
           
        ) 
     }

     renderTableData() {
        return this.state.stores.map((storedetail, index) => {
           const { id, img,store,status,subscription} = storedetail //destructuring
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



     renderProductDetails() {
           return (
            <div id="product-details"> 
                <div id="info-table">
                <table>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
                </div>
                
                
            </div>
           )
     }

    render(){
        
        return(
                <div id="user-details">
                       {this.renderBasicDetails()}
                       <h3>Stores</h3>
                       {this.renderProductDetails()} 
                       <div id="s-income">
                            <Storeincome />
                        </div>
                        {this.renderPopup()}
                </div>        
         )
    }                               
  }

  export default Userdetails;