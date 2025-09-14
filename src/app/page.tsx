import Card from "@/components/Card";
import ContentForm from "@/components/ContentForm";
import Link from "next/link";
import { Suspense } from 'react'

export default function Home() {
    return (
        <ContentForm>
            <div className='h-lvh p-4 bg-bg hover:rounded-br-full'>
                <h1 className='flex justify-center text-text-bright'>Things</h1>
                <Card className='bg-bg-bright h-60 w-52 rounded-3'>
                    <p className='flex justify-center text-text-bright'>Content</p>
                </Card>
                <Link href='/things'>
                    <p className='bg-bg flex justify-center text-text-bright'>Browse your things</p>
                </Link>
            </div>
        </ContentForm>
    )
}