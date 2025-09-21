import Card from "@/components/Card";
import ContentForm from "@/components/ContentForm";
import Link from "next/link";

interface ThingItem {
    id: number
    name: string
    description: string
}

function onCardClick(itemId) {
    console.log('itemId', itemId)
}

function generateCards(items: Array<ThingItem>) {
    const cardComponents = []
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        cardComponents.push((
        <Card key={i} className='flex justify-center bg-bg-bright h-60 w-52 m-1 rounded-3 shrink-0'>
            <p className='flex justify-center text-text-primary'>{item.name}</p>
            <p className='flex justify-center text-text-primary'>{item.description}</p>
        </Card>
        ))
    }
    return cardComponents
}

export default function Home() {

    const mockItems = [
        {
            id: 1,
            name: 'test1',
            description: 'This is test item'
        },
        {
            id: 2,
            name: 'test2',
            description: 'This is test item'
        },
        {
            id: 3,
            name: 'test3',
            description: 'This is test item'
        },
        {
            id: 4,
            name: 'test4',
            description: 'This is test item'
        }
    ]

    const cardComponents = generateCards(mockItems)

    return (
        <ContentForm>
            <div className='h-lvh p-4 bg-bg hover:rounded-br-full'>
                <h1 className='flex justify-center text-text-bright'>Things</h1>
                <div className='flex overflow-x-auto min-w-10'>
                    {cardComponents}
                </div>
                <Link href='/things'>
                    <p className='bg-bg flex justify-center text-text-bright'>Browse your things</p>
                </Link>
            </div>
        </ContentForm>
    )
}