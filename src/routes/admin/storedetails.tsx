import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiMapMarker, mdiStar,mdiChevronRight } from "@mdi/js";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import gadget from "../../assets/top-view-photo-of-laptop-near-camera-3178938.jpg";
import tech from "../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import owner from "../../assets/people-near-vegetable-display-2919590.jpg";
import Storeincome from "../../components/storeincomechart";
import Productssold from "../../components/storemonthlysaleschart";

export interface IState {
    basicstoredetails: any[];
    productstoredetails: any[];
    reviews:any[];
    TabView:boolean;
    bgcolor:boolean;
  }

  class Storedetails extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {
            TabView: true,
            bgcolor:true,
            basicstoredetails: [
                { 
                id:1,
                name: 'Apple', 
                rating:4,
                location:'Ibadan, Nigeria.',  
                owner: 'Tommy Shelby' , 
                ownerimg: owner,
                bio:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sint dolores reprehenderit eveniet voluptatum maiores sequi, quibusdam tempore itaque inventore, dolore, quis quae id similique consequatur hic! Non, quas tempora.',
                subscription:'premium',
                datecreated:'01-01-2020',
                storeimg: Accessoriesbanner,
                reviewnum:20,
                }
            ] ,
            productstoredetails: [
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
            ],
            reviews:[
                {
                    id:1,
                    userimg:gadget,
                    username:'Ada shelby',
                    comment:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    date:'01-01-2020',

                },
                {
                    id:2,
                    userimg:tech,
                    username:'Ada shelby',
                    comment:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    date:'01-01-2020',
                },
                {
                    id:3,
                    userimg:Accessoriesbanner,
                    username:'Ada shelby',
                    comment:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    date:'01-01-2020',
                }
            ]
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


      renderReview(){
        return this.state.reviews.map((reviewdetail, index) => {
            const { id ,userimg,username,comment,date} = reviewdetail //destructuring
            return (
               <div id="comment-cover" key={id}>
                <img src={userimg} />
                <h3>{username}</h3>
                <p>{comment}</p>
                <p style={{color:'#ff5a60'}}>{date}</p>
               </div>
            )
         })
     }

      renderBasicDetails() {
        return this.state.basicstoredetails.map((store, index) => {
           const { id, name, location, subscription, storeimg,rating, datecreated, owner,reviewnum,ownerimg,bio } = store //destructuring
            //setting rating and stars to show
           let numrating = Math.round(rating);
            var ratings = [];
            for(var i = 0; i < numrating; i++){
                ratings.push(
                    <Icon key={i} path={mdiStar} size={0.8} color="#8333b8" />
                )
            }
            //account type settings
            var accounttype;
            if(subscription == 'premium'){
                accounttype = <p><span id="accounttype-p">P</span> Premium store</p>
            } else if(subscription == 'regular'){
                accounttype = <p><span id="accounttype-r">R</span> Regular store</p>
            }
        
           return (
            <div>
                <div key={id} id="basic-details">     
                    <div id="b-img">
                        <img src={storeimg} />
                        <h2>{name}</h2>
                        <p id='loc-icon'>
                            <Icon path={mdiMapMarker} color="#ff5a60" size={.9} />
                            <span>{location}</span>
                        </p>
                        
                        <p className="rating label label-md">
                            Rating: <span id="rating-cover">{ratings}</span>
                        </p>
                    </div>
                    <div id="basic-content">
                        <img src={ownerimg} /> <h3>{owner}</h3>
                        <p>{bio}</p>
                        <p>{accounttype}</p>                        
                        <p>Date created: <b>{datecreated}</b></p>
                        
                    </div>

                    
                </div>
                
                <div id="s-income">
                    <Storeincome />
                </div>
                
                <div id="comment-contain">
                    <h2>Reviews <span className="review">({reviewnum})</span></h2>
                    {this.renderReview()}
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
                <th>product</th>
                <th>category</th>
                <th>total sold</th>
                <th>pending orders</th> 
                <th></th>           
            </tr>
           
        ) 
     }

     renderTableData() {
        return this.state.productstoredetails.map((storedetail, index) => {
           const { id ,prodimg,product,category,totalsold,pendingorders} = storedetail //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td style={{textAlign: 'center',}}><img src={prodimg} /></td>
                 <td>{product}</td>
                 <td>{category}</td>
                 <td>{totalsold}</td>
                 <td>{pendingorders}</td><td>
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
                <div id="productsold-chart">
                    <Productssold />
                </div>
                </div>
                
                
            </div>
           )
     }

     
     //toggle page rendered basic info|product info
    render(){
        const TabView = this.state.TabView;
        let content;
        if (TabView) {      
            content = this.renderBasicDetails() ;    
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
                                onClick={this.handleInfoClick}>Information</button>
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

  export default Storedetails;