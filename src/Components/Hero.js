import React, { useState, useEffect } from 'react'
import '../Styles/hero.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Hero() {

    const [slot1, setSlot1] = useState(0)
    const [slot2, setSlot2] = useState(1)
    const [slot3, setSlot3] = useState(2)
    const [left, setLeft] = useState(true)

        useEffect(() => {
             let handleResize = () => {
                if (left) {
                    document.getElementById('hero-c').scrollTo({left: 0})
                } else {
                    document.getElementById('hero-c').scrollTo({left: 10000})
                }
             }
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }, [left])

    const heroContent = [
        {
            product: 'product',
            description: 'description',
            img: 'red'
        },
        {
            product: 'product',
            description: 'description',
            img: 'blue'
        },
        {
            product: 'product',
            description: 'description',
            img: 'orange'
        }
    ]

    const arrowLeft = () => {  
        if (left) {
            if (slot1 === 2) {
                setSlot1(1)
            } else if (slot1 === 1) {
                setSlot1(0)
            } else {
                setSlot1(2)
            }
            if (slot2 === 2) {
                setSlot2(1)
            } else if (slot2 === 1) {
                setSlot2(0)
            } else {
                setSlot2(2)
            }
            if (slot3 === 2) {
                setSlot3(1)
            } else if (slot3 === 1) {
                setSlot3(0)
            } else {
                setSlot3(2)
            }
        }
        setLeft(true)
        setTimeout(() => {
            document.getElementById('hero-c').scrollTo({left: 10000})
        }, 1)
        setTimeout(() => {
            document.getElementById('hero-c').scrollTo({left: 0, behavior: 'smooth'})
        }, 2)
    }
    const arrowRight = () => {   
        if (!left) {
            if (slot1 === 2) {
                setSlot1(0)
            } else if (slot1 === 1) {
                setSlot1(2)
            } else {
                setSlot1(1)
            }
            if (slot2 === 2) {
                setSlot2(0)
            } else if (slot2 === 1) {
                setSlot2(2)
            } else {
                setSlot2(1)
            }
            if (slot3 === 2) {
                setSlot3(0)
            } else if (slot3 === 1) {
                setSlot3(2)
            } else {
                setSlot3(1)
            }
        }
        setLeft(false)
        setTimeout(() => {
            document.getElementById('hero-c').scrollTo({left: 0})
        }, 1)
        setTimeout(() => {
            document.getElementById('hero-c').scrollTo({left: 10000, behavior: 'smooth'})
        }, 2)
    }


    const product1 = () => {
        return (
            <div className='hero' style={{backgroundColor: heroContent[0].img}}>
                  <p>{heroContent[0].product}</p>
                  <p>{heroContent[0].description}</p>
            </div>
        )
    }
    const product2 = ()  => {
        return (
            <div className='hero'  style={{backgroundColor: heroContent[1].img}}>
                  <p>{heroContent[1].product}</p>
                  <p>{heroContent[1].description}</p>
            </div>
        )
    }
    const product3 = ()  => {
        return (
            <div className='hero' style={{backgroundColor: heroContent[2].img}}>
                  <p>{heroContent[2].product}</p>
                  <p>{heroContent[2].description}</p>
            </div>
        )
    }

    const products = [
        product1,
        product2,
        product3
    ]
    
    return (
        <>
      <div className='body-top'>
          <div className='hero-container' id='hero-c'>
                <div>{products[slot1]()}</div>
                <div>{products[slot2]()}</div>
                <div>{products[slot3]()}</div>
          </div>
      </div>
      <div className='arrows'>
            <button className='shift-button' onClick={arrowLeft}><FaChevronLeft /></button>
            <div className='middle'></div>
            <button className='shift-button' onClick={arrowRight}><FaChevronRight /></button>
        </div>
      </>
    )
}

export default Hero