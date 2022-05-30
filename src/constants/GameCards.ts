export interface Card {
    id: number;
    src: string,
    matched: boolean,
}

export const CARDS: Card[] = [
    { id: 1, src: 'traditional', matched: false },
    { id: 2, src: 'steam', matched: false },
    { id: 3, src: 'infra', matched: false },
    { id: 4, src: 'dry', matched: false },
    { id: 5, src: 'patchouli', matched: false },
    { id: 6, src: 'eucalyptus', matched: false }
]