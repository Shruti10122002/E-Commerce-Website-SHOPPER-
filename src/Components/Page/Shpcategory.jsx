import React, { useContext } from 'react'
import './Css/Shpcategory.css'
import { ShopContext } from '../../Context/Shopcontext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'


function Shpcategory(props) {
    const { all_product } = useContext(ShopContext)



    return (
        <div className='shopcategory'>
            <img className="shopcategory-banner"  src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> Out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by<img src={dropdown_icon} alt="" />

                </div>

            </div>
            <div className="shopcategory-product">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                            old_price={item.old_price} />
                    }
                    else {
                        return null
                    }

                })}


            </div>
            <div className="loadmore">
                Explore More
            </div>


        </div>
    )
}

export default Shpcategory
