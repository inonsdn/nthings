export default function ContentForm({children}: {children: React.ReactNode}) {
    return (
        // <div className='w-full mx-auto max-w-screen-2xl'>
            <div className='bg-bg w-full min-h-screen
                grid 
                sm:grid-cols-1
                md:grid-cols-[1fr_2fr_1fr] 
                '
            >
                <div className='hidden md:block'/>
                <main className='min-w-0'>{children}</main>
                <div className='hidden md:block'/>
            </div>
        // </div>
    )
}