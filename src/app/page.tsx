import Item from "@/components/Item";
import ThemeButton from "@/components/ThemeButton";


export default function Home() {
    return (
        <div className='bg-bg'>
            <ThemeButton></ThemeButton>
            <Item
                title={'your item'}></Item>

        </div>
    )
}