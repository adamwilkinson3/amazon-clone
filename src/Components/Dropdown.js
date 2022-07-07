import React, { useState, useRef, useEffect } from 'react'
import { FaSearch, FaCaretDown } from 'react-icons/fa'



function Dropdown({focus, setFocus, inputDropdown, setInputDropdown}) {

    const [allFocus, setAllFocus] = useState(false)
    const [preinput, setPreinput] = useState('All')
    const [previnput, setPrevinput] = useState('')

    const allList = ['All Departments', 'Alexa Skills', 'Amazon Devices', 'Amazon Explore',
    'Amazon Pharmacy', 'Amazon Warehouse', 'Appliances', 'Apps & Games', 'Arts, Crafts & Sewing',
    'Audible Books & Originals', 'Automotive Parts & Accessories', 'AWS Courses', 'Baby',
    'Beauty & Personal Care', 'Books', 'CDs & Vinyl', 'Cell Phones & Accessories',
    'Clothing, Shoes & Jewelry', 'Women', 'Men', 'Girls', 'Boys', 'Baby', 'Collectables & Fine Art',
    'Computers', 'Credit and Payment Cards', 'Digital Education Resources', 'Digital Music',
    'Electronics', 'Garden & Outdoor', 'Gift Cards', 'Grocery & Gourmet Food', 'Handmade',
    'Health, Household & Baby Care', 'Home & Business Services', 'Home & Kitchen', 'Industial & Scientific',
    'Just for Prime', 'Kindle Store', 'Luggage & Travel Gear', 'Luxury Stores', 'Magazine Subscriptions',
    'Movies & TV', 'Musical Instruments', 'Office Products', 'Pet Supplies', 'Premium Beauty',
    'Prime Video', 'Smart Home', 'Software', 'Sports & Outdoors', 'Subscribe & Save',
    'Subscription Boxes', 'Tools & Home Improvement', 'Toys & Games', 'Under $10', 'Video Games'
    ]

    const handleSelect = (item) => {
        if (previnput !== item) {
            setPreinput(item)
            setPrevinput(item)
        } else {
            setTimeout(() => focusPreinput(), 1)
        }
    }

    const allDropdown = allList.map((item) => 
            <button onMouseDown={() => handleSelect(item)}>{item}</button>
    )

    const handleBlurPreinput = () => {
            setAllFocus(false)
    }

    const inputElement = useRef()

    const focusInput = () => {
        setTimeout(() => inputElement.current.focus(), 1)
    }

    const preinputElement = useRef()

    const focusPreinput = () => {
        preinputElement.current.focus()
    }

    useEffect(() => {
        if (preinput !== 'All') {
            focusInput()
        }
    }, [preinput])

  return (
    <>
    <div className='dropdown-container2'>
        <button className='preinput' onClick={() => setAllFocus(prev => !prev)} onBlur={handleBlurPreinput} ref={preinputElement}>{preinput} <FaCaretDown /></button>
        {allFocus &&
        <div className='input-dropdown2'>
            {allDropdown}
        </div>
        }
    </div>
    <div class='space'></div>
    <div className='dropdown-container'>
        <input className='input-search' type='text' onFocus={() => {setFocus(true); setInputDropdown(true)}} onBlur={() => {setFocus(false)}} ref={inputElement} />
        {inputDropdown && focus &&
            <div className='input-dropdown'>
                <button>Product 1</button>
                <button>Product 2</button>
                <button>Product 3</button>
            </div>
        }
    </div>
    <button className='search'><FaSearch /></button>
    </>
  )
}

export default Dropdown