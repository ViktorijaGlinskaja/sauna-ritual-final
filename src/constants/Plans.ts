export interface Plan {
    id: number;
    title: string;
    info: string;
    price: number;
    pay: number;
    total: string;
    frequency: string;
    value: string;
}

export const PLANS: Plan[] = [
    {
        id: 1,
        title: 'Annual',
        info: 'Prepay for 4 boxes and save $20',
        price: 49.99,
        pay: 199.99,
        total: 'USD Per Box',
        frequency: 'You will be billed $199.99 annually.',
        value: 'optionA',
    },
    {
        id: 2,
        title: 'Seasonal',
        info: 'Pay per box',
        price: 54.99,
        pay: 54.99,
        total: 'USD',
        frequency: 'Billed quarterly.',
        value: 'optionB',
    },
]