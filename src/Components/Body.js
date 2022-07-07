import React from 'react'
import '../Styles/body.css'

function Body() {

const product = () => {
    return (
        <div className='box-container'>
            <h2>Shopping</h2>
            <div className='product-square'>
                <div>
                    <div className='product-picture'>Product Picture</div>
                    <p>Product1</p>
                </div>
                <div>
                    <div className='product-picture'>Product Picture</div>
                    <p>Product2</p>
                </div>
                <div>
                    <div className='product-picture'>Product Picture</div>
                    <p>Product3</p>
                </div>
                <div>
                    <div className='product-picture'>Product Picture</div>
                    <p>Product4</p>
                </div>
            </div>
        </div>
    )
}



  return (
      <>
<div className='col'>
    <div className='body'>
        <div className='flex-container'>
            {product()}
            {product()}
            {product()}
            {product()}
        </div>

        <div className='scroller'>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
            <div className='scroller-content'></div>
        </div>

            <div className='flex-container'>
                {product()}
                {product()}
                {product()}
                {product()}
            </div>
    </div>
</div>
    </>
  )
}

export default Body