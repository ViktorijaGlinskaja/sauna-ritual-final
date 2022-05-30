export interface Product {
    id: number,
    title: string,
    size?: string,
    img: string,
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: 'Nikura | Positivity Pure Essential Oil Blend',
        size: '10ml',
        img: 'mix'
    },
    {
        id: 2,
        title: 'Nikura | Eucalyptus (Chinese) Pure Essential Oil',
        size: '100ml',
        img: 'eucalyptus'
    },
    {
        id: 3,
        title: 'Nikura | Patchouli (Indonesian) Pure Essential Oil ',
        size: '10ml',
        img: 'patchouli'
    },
    {
        id: 4,
        title: 'Crystal salt for sauna salt peeling',
        size: '10ml',
        img: 'myrrh'
    },
    {
        id: 5,
        title: 'Crystal salt for sauna salt peeling',
        size: '250 gr.',
        img: 'soap'
    },
    {
        id: 6,
        title: 'Personalized embroidered sauna towel',
        img: 'towel'
    },
]