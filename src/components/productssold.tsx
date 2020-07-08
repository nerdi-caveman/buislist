import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiChevronRight } from "@mdi/js";
import Accessoriesbanner from "../assets/headphones_bw_headset_120277_3840x2400.jpg";

export interface IState {
    soldporducts: any[];
  }

  class SoldProducts extends React.Component<{},IState> {  
      constructor(props:any){
          super(props);
          this.state = {soldporducts: [
            { 
              id:1,
              item: 'Headphones',
              category: 'Phones, pcs & Gadgets', 
              quantity: 20,
              img: Accessoriesbanner
             },
             { 
                id:2,
                item: 'Headphones',
                category: 'Phones, pcs & Gadgets', 
                quantity: 20,
                img: Accessoriesbanner
               },
               { 
                id:3,
                item: 'Headphones',
                category: 'Phones, pcs & Gadgets', 
                quantity: 20,
                img: Accessoriesbanner
               },
               { 
                id:4,
                item: 'Headphones',
                category: 'Phones, pcs & Gadgets', 
                quantity: 20,
                img: Accessoriesbanner
               },
               { 
                id:5,
                item: 'Headphones',
                category: 'Phones, pcs & Gadgets', 
                quantity: 20,
                img: Accessoriesbanner
                },
            ]  
        }
    }

    renderProducts() {
        return this.state.soldporducts.map((store, index) => {
           const { id, item, quantity, category, img } = store //destructuring
           return (
            <Link to="">
                <div key={id} id="prod-item">   
                <img src={img}   />  
                <h3>{item}</h3>
                <p id="p-category">{category}</p>
                <p id="p-quantity">{quantity}</p>
                <div className="see-all">
                    
                    <span>View Details</span>
                    <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
                </div>    
            </div>
            </Link>
           )
        })
     }


    render(){
        return(
                <div className="prod-list">
                    {this.renderProducts()}
                    
                </div>        
         )
    }                               
  }

  export default SoldProducts;