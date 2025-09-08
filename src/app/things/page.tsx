"use client";

import Link from 'next/link'

import ContentForm from "@/components/ContentForm";
import Item from "@/components/Item";
import { useDbHandler } from '@/contexts/DbContext';
import FilterBar from '@/components/FilterBar';
import { useEffect, useState } from 'react';

const EmptyItemComponent = (
    <p key={0} className='flex justify-center text-text-bright'>Nothing in here...</p>
)

interface ItemObj {
    id: number
    name: string
}

// function to generate component Item to construct in list
const getItemComponents = (items: Array<ItemObj> | undefined) => {
    const components = []
    if (items === undefined) {
        return components
    }
    if (items.length == 0) {
        return [ EmptyItemComponent ]
    }
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        components.push(<Item key={i+1} title={item.name} className="mb-4"></Item>)
    }
    return components
}

export default function Things() {

    const [queriedItems, setQueriedItems] = useState<ItemObj[]>([])
    const [displayItems, setDisplayItems] = useState<React.ReactNode[]>([])
    const [filterName, setFilterName] = useState<string>('')

    const dbHandler = useDbHandler()

    // do after mount that to get item from db
    //  and set to queried
    useEffect(() => {
        const itemObjs = dbHandler?.getItems()
        setQueriedItems(prev => [...itemObjs])
    }, [dbHandler])

    // trigger when get queried or filter name change
    //  update display items node
    useEffect(()=>{
        const filteredItems = queriedItems?.filter(item => {
            if (item.name.toLowerCase().includes(filterName)) {
                return true
            } 
            return false
        })
        const items = getItemComponents(filteredItems)
        setDisplayItems(prevItems => [...items])
    }, [filterName, queriedItems])

    // callback function to set filter name with filter bar has update
    const onFilterChanged_cb = (value) => {
        setFilterName(value)
    }

    return (
        <ContentForm>
            <div className='h-lvh p-4 bg-bg hover:rounded-br-full'>
                <h1 className='flex justify-center text-text-bright'>Your things</h1>
                <FilterBar
                    onFilterBarChanged_cb={onFilterChanged_cb}
                    className='pb-4'></FilterBar>
                {displayItems}
                <Link href='/'>
                    <p className='bg-bg flex justify-center text-text-bright'>Back to home</p>
                </Link>
            </div>
        </ContentForm>
    )
}