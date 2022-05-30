export interface Sauna {
    id: number,
    title: string,
    img: string,
}

export const SAUNAS: Sauna[] = [
    {
        id: 1,
        title: 'Traditional Sauna',
        img: 'traditional'
    },
    {
        id: 2,
        title: 'Steam Sauna',
        img: 'steam'
    },
    {
        id: 3,
        title: 'Infrared Sauna',
        img: 'infra'
    },
    {
        id: 4,
        title: 'Dry Sauna',
        img: 'dry'
    }
]