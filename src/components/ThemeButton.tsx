"use client"
import { useState } from "react"

export default function ThemeButton() {

    const [currentTheme, setTheme] = useState('light')

    // define function for change theme when clicked
    const onClick = () => {

        // toggle theme
        let nextTheme = 'dark'
        if ( currentTheme == 'light' ) {
            nextTheme = 'dark'
        } else {
            nextTheme = 'light'
        }

        // set to state and update to document
        setTheme(nextTheme)
        console.log('Set theme')
        document.documentElement.classList.toggle(nextTheme)
    }

    return (
        <div>
            <button 
                onClick={onClick}
                className='bg-button text-bg border-2 border-bg-modal rounded-full hover:bg-button-hover'
            >
                { currentTheme } asdasdasfasdqw
            </button>
        </div>
    )
}
