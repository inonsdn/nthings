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
        <div className='bg-bg'>
            <button onClick={onClick} className='bg-bg text-text-primary'>
                { currentTheme }
            </button>
        <div className="text-red-500">tailwind ok?</div>
        <div className="bg-bg-modal text-text-primary">var ok?</div>
        <div className="bg-card text-white px-2">bg-card (from config)</div>
        <div className="bg-card-primary text-white px-2">bg-card-primary</div>
        </div>
    )
}
