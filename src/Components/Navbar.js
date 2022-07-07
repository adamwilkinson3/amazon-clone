import React, { useState } from 'react'
import '../Styles/navbar.css'
import { FaAmazon, FaShoppingCart, FaBars, FaMapMarkerAlt } from 'react-icons/fa'
import Dropdown from './Dropdown'
import Language from './Language'
import Account from './Account'

function Navbar() {

const bottombarItems = ['Best Sellers', 'Buy Again', 'Amazon Basics', 'Customer Service',
'Books', 'Pet Supplies', 'Kindle Books', 'Health & Household', 'Pharmacy', 'Beauty & Personal Care',
'Livestreams', 'Handmade', 'Coupons', "Today's Deals", 'Home Improvement', 'Gift Cards',
'Your Amazon.com', 'Subscribe & Save', 'Find A Gift', 'Fashion'
]
const bottombar = bottombarItems.map((item) => 
    <button>{item}</button>
)

const [focus, setFocus] = useState(false)

const [inputDropdown, setInputDropdown] = useState(false)

  return (
    <div className='navbar'>
        <div className='top-bar grid'>
            <button className='all-mobile'><FaBars /></button>
            <button className='amazon-icon'><FaAmazon /></button>
            <div className='empty'></div>
            <button className='deliver'><span style={{filter: 'brightness(70%)', position: 'relative', left: '13%'}}>Deliver to You</span><br/><FaMapMarkerAlt /><span className="location">Chicago 60608</span></button>
            {focus ? 
                <div className='search-bar outline-all'>
                    <Dropdown focus={focus} setFocus={setFocus} inputDropdown={inputDropdown} setInputDropdown={setInputDropdown} />
                </div>
            :
                <div className='search-bar'>
                    <Dropdown focus={focus} setFocus={setFocus} inputDropdown={inputDropdown} setInputDropdown={setInputDropdown} />
                </div>
            }
            <Language setInputDropdown={setInputDropdown} />
            <Account setInputDropdown={setInputDropdown} />
            <button className='orders'>Returns<br/>& Orders</button>
            <button className='shopping-cart-mobile'><span className='cart-quantity'>0</span><span className='cart-img'><FaShoppingCart /></span></button>
            <button className='shopping-cart'><span className='cart-quantity'>0</span><span className='cart-img'><FaShoppingCart /></span>Cart</button>
        </div>
        <div className='bottom-bar grid2'>
            <div className='grid-bottom'>
            <button className='all'><FaBars />All</button>
                {bottombar}
            </div>
            <div className='deliver-mobile'>
                <button><FaMapMarkerAlt /> Deliver to You - Chicago 60608</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar