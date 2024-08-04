interface product{
    id: number,
    name: string,
    price: number,
    // name2?: string // Optional property
}

export const products :product[] = [
    {
        id:0,
        name:"Google pixel 8",
        price: 69999
    },
    {
        id:1,
        name:"Iphone 15 pro",
        price: 99999,
        // name2: "jjjj"
    },
    
]