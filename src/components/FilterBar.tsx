import { useState } from "react"

interface FilterBarProps {
    onFilterBarChanged_cb: CallableFunction | null
    className: string
}

export default function FilterBar({onFilterBarChanged_cb, className = ''}: FilterBarProps) {

    const [filterText, setFilterText] = useState('')

    const mainClassName = 'w-full ' + className

    const onInputTyping_cb = (e) => {
        const value = e.target.value
        setFilterText(value)
        if (onFilterBarChanged_cb) {
            onFilterBarChanged_cb(value)
        }
    }

    return (
        <div className={mainClassName}>
            <input 
                className="w-full rounded-full"
                value={filterText} 
                onChange={onInputTyping_cb}></input>
        </div>
    )
}