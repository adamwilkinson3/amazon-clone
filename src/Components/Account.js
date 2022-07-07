import React, { useState } from 'react'
import { FaCaretDown, FaUserAlt } from 'react-icons/fa'
import '../Styles/account.css'

function Account({ setFocus, setInputDropdown}) {

    const [languageDropdown, setLanguageDropdown] = useState(false)

    function buyagainItem(img, productName, price) {
        this.img = img;
        this.productName = productName;
        this.price = price;
    }

    const item1 = new buyagainItem('blue', 'Product1 - product description for product', '$27.99')
    const item2 = new buyagainItem('orange', 'Product2 - product description for product', '$45.99')
    const item3 = new buyagainItem('purple', 'Product3 - product description for product', '$12.99')

    const buyagain = [item1, item2, item3]

    const yourAccountList = ['Account', 'Orders', 'Recommendations', 'Browser History', 'AmazonSmile',
        'Watchlist', 'Video Purchases & Rentals', 'Kindle Unlimited', 'Content & Devices',
        'Subscribe & Save Items', 'Memberships & Subscriptions', 'Prime Membership', 'Prime Membership',
        'Amazon Credit Cards', 'Music Library', 'Your Interests', 'Start a Selling Account',
        'Register for a Business Account', 'Customer Service', 'Switch Accounts', 'Sign Out'
    ]

  return (
    <div className='dropdown-container3'>
    <button className='account' onMouseEnter={() => {setLanguageDropdown(true); setInputDropdown(false)}} onMouseLeave={() => setLanguageDropdown(false)}>Hello, You<br/>Account & Lists<FaCaretDown /></button>
    <button className='account-mobile' onMouseEnter={() => {setLanguageDropdown(false); setInputDropdown(false)}} onMouseLeave={() => setLanguageDropdown(false)}>You {'> '}<FaUserAlt /></button>
    {languageDropdown &&
    <div className='outer-dropdown2' onMouseEnter={() => setLanguageDropdown(true)} onMouseLeave={() => setLanguageDropdown(false)}>
        <div className='input-dropdown4'>
            <div className='column-container column-container1'>
                <div className='buyagain-top'>
                    <h3>Buy it again</h3>
                    <a>View All & Manage</a>
                </div>
                <div className='buyagain-body'>
                    {buyagain.map((item) => {
                    return(
                    <div className='buyagain-item'>
                        <div className='img' style={{backgroundColor: item.img}}>
                            {item.img}
                        </div>
                        <div className='buyagain-content'>
                            <a className='productName'>{item.productName}</a>
                            <div><a className='price'>{item.price}</a></div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
               <div className='column-container column-container2'>
                    <h3>Your Lists</h3>
                    <a>Wish List</a>
                    <a>Save & Compare</a>
                    <div className='bar'></div>
                    <a>Create a List</a>
                    <a>Find a List or Registry</a>
                    <a>AmazonSmile Charity Lists</a>
               </div>
               <div className='bar-vertical'></div>
               <div className='column-container column-container2'>
                    <h3>Your Account</h3>
                    {yourAccountList.map((item) => {
                        return <a>{item}</a>
                    })}
               </div>
        </div>
    </div>
    }
    </div>
  )
}

export default Account