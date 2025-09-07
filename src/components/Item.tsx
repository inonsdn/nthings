
interface ItemProps {
    title: string;
    width: number
}

export default function Item({title}: ItemProps) {
    return (
        <div
        className="
            relative flex items-center w-full h-10
            rounded-full bg-item hover:bg-item-hover
            overflow-hidden        /* reserve space for the button */
        "
        >
        <span className="ml-3 block w-full truncate pr-9 text-text-primary text-sm">
            {title} asdqweasdasdasdasasdqweasdasdasdasasdqweasdasdasdasasdqweasdasdasdasasdqweasdasdasdasa
        </span>

        <button
            type="button"
            // onClick={onRemove}
            className="
                absolute right-2 top-1/2 -translate-y-1/2
                inline-flex items-center justify-center
                w-7 h-7 rounded-full shrink-0
                bg-button hover:bg-button-hover
                text-text-primary text-xs
                "
            aria-label="Remove"
            title="Remove"
        >
            ×
        </button>
        </div>
    )
}