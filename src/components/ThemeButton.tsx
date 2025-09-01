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
        <button onClick={onClick}>
            { currentTheme }
        </button>
    )
}