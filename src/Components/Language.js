import React, { useState } from 'react'
import { FaFlagUsa, FaCaretDown } from 'react-icons/fa'

function Language({ setFocus, setInputDropdown }) {

    const [languageDropdown, setLanguageDropdown] = useState(false)
    const [language, setLanguage] = useState(true)

  return (
    <div className='dropdown-container3 language'>
    <button onMouseEnter={() => {setLanguageDropdown(true); setInputDropdown(false)}} onMouseLeave={() => setLanguageDropdown(false)}><FaFlagUsa /> <FaCaretDown /></button>
    {languageDropdown &&
    <div className='outer-dropdown' onMouseEnter={() => setLanguageDropdown(true)} onMouseLeave={() => setLanguageDropdown(false)}>
        <form className='input-dropdown3' onChange={() => setLanguage(prev => !prev)} >
            <div className='language-content'>
                <label>
                    <input type="radio" name='language' checked={language} /> <span>English - EN</span>
                </label>
            </div>
            <div className='bar'></div>
            <div className='language-content'>
                <label>
                    <input type="radio" name='language' checked={!language} /> <span>espa&#241;ol - ES</span>
                </label>
                <div className='tags'>Learn more</div>
            </div>
            <div className='bar'></div>
            <div className='language-content'>
                <p><FaFlagUsa /> You are shopping on Amazon.com</p>
                <div className='tags'>Change country/region.</div>
            </div>
        </form>
    </div>
    }
</div>
  )
}

export default Language