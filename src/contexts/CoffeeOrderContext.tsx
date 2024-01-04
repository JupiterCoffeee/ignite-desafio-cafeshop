import { createContext, useState } from "react"

interface CoffeeOrderContextProviderProps {
    children: React.ReactNode
}

export interface CoffeeOrder {
    id: string;
    type: string;
    amount: number;
    price: number;
    banner: string;
}

interface Order {
    address: string;
    paymentMethod: string;
}

interface CoffeeOrderContextType {
    coffeeOrderList: CoffeeOrder[]
    order: Order
    setOrder: React.Dispatch<any>
    setCoffeeOrderList: React.Dispatch<React.SetStateAction<CoffeeOrder[]>>
    coffeeAmount: number;
    setCoffeeAmount: React.Dispatch<React.SetStateAction<number>>
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContextType)

export function CoffeeOrderContextProvider({
    children,
}: CoffeeOrderContextProviderProps) {
    const [coffeeOrderList, setCoffeeOrderList] = useState<CoffeeOrder[]>([]);
    const [order, setOrder] = useState(Object)
    const [coffeeAmount, setCoffeeAmount] = useState(0);
    
    return (
        <CoffeeOrderContext.Provider value={{
            order,
            setOrder,
            coffeeOrderList,
            setCoffeeOrderList,
            coffeeAmount,
            setCoffeeAmount
        }}>
            {children}
        </CoffeeOrderContext.Provider>
    )
}