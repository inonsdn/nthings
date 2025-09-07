"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import DbHandler from '@/dbHandler/DbHandler'

const DbContext = createContext<DbHandler | null>(null)

export function DbProvider({children}: {children: ReactNode}) {

    const [db, setDb] = useState<DbHandler | null>(null)
    
    // set db to state when mounted
    useEffect(() => {
        const dbHandlerObj = new DbHandler()
        setDb(dbHandlerObj)
    }, [])

    if (!db) {
        return null
    }

    return (
        <DbContext.Provider value={db}>
            {children}
        </DbContext.Provider>
    )
}

export const useDbHandler = () => useContext(DbContext)