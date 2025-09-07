
interface ItemProps {
    title: string;
    className: string
}

export default function Item({title, className = ''}: ItemProps) {
    const mainClassName = 'relative flex items-center w-full h-10 \
            rounded-full bg-item hover:bg-item-hover \
            overflow-hidden ' + className
    return (
        <div className={mainClassName}>
        <span className="ml-3 block w-full truncate pr-9 text-text-primary text-sm">
            {title}
        </span>

        <button
            type="button"
            // onClick={onRemove}
            className="
                absolute right-2 top-1/2 -translate-y-1/2
                inline-flex items-center justify-center
                w-6 h-6 rounded-full shrink-0
                bg-button hover:bg-button-hover
                text-text-primary text-xs
                "
            // aria-label="Remove"
            title="Remove"
        >
            ×
        </button>
        </div>
    )
}