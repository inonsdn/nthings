
interface CardProps {
    children: React.ReactNode;
    className: string;

    onClick_cb: (() => void) | null
}

interface ClassNameObj {
    name: string
    value: string
}

function extractClassName (classNameStr: string) {
    const classNameList = classNameStr.split(' ')
    const allClassNameObjs = []
    let curObj: ClassNameObj= {
        name: '',
        value: ''
    }
    for (let i = 0; i < classNameList.length; i++) {
        if (i%2 == 0) {
            curObj.name = classNameList[i]
        } else {
            curObj.value = classNameList[i]
            allClassNameObjs.push(curObj)
            curObj = {
                name: '',
                value: ''
            }
        }
    }
    return allClassNameObjs
}

function defaultClassName () {
    return {

    }
}

export default function Card({children, className = '', onClick_cb = null}: CardProps) {
    const classNames = extractClassName(className)

    const mainClassName = ' ' + className
    return (
        <div className={mainClassName} onClick={onClick_cb}>
            <main className='min-w-0'>{children}</main>
        </div>
    )
}