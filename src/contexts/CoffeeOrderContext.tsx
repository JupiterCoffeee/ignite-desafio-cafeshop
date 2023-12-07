import { createContext, useState } from "react"

interface CoffeeOrderContextProviderProps {
    children: React.ReactNode
}

interface CoffeeOrder {
    id: string;
    type: string;
    amount: number;
}

interface CoffeeOrderContextType {
    coffeeOrderList: CoffeeOrder[]
    setCoffeeOrderList: React.Dispatch<React.SetStateAction<CoffeeOrder[]>>
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContextType)

export function CoffeeOrderContextProvider({
    children,
}: CoffeeOrderContextProviderProps) {
    const [coffeeOrderList, setCoffeeOrderList] = useState<CoffeeOrder[]>([]);
    
    return (
        <CoffeeOrderContext.Provider value={{
            coffeeOrderList,
            setCoffeeOrderList
        }}>
            {children}
        </CoffeeOrderContext.Provider>
    )
}