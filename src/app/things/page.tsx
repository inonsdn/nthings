"use client";

import Link from 'next/link'

import ContentForm from "@/components/ContentForm";
import Item from "@/components/Item";
import { useDbHandler } from '@/contexts/DbContext';

const EmptyItemComponent = (
    <p className='flex justify-center text-text-bright'>Nothing in here...</p>
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
        return EmptyItemComponent
    }
    for (const item of items) {
        components.push(<Item key={item.id} title={item.name} className="mb-4"></Item>)
    }
    return components
}

export default function Things() {

    const dbHandler = useDbHandler()

    const itemObjs = dbHandler?.getItems()

    // const itemObjs = [
    //     {
    //         id: 1,
    //         name: 'test'
    //     },{
    //         id: 2,
    //         name: 'test'
    //     }
    // ]
    const items = getItemComponents(itemObjs)

    return (
        <ContentForm>
            <div className='h-lvh p-4 bg-bg hover:rounded-br-full'>
                <h1 className='flex justify-center text-text-bright'>Your things</h1>
                {items}
                <Link href='/'>
                    <p className='bg-bg flex justify-center text-text-bright'>Back to home</p>
                </Link>
            </div>
        </ContentForm>
    )
}