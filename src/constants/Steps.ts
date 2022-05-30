export interface Steps {
    id: number;
    title: string;
    text: string;
    src: string;
}

export const STEPS: Steps[] = [
    {
        id: 1,
        title: 'Make it Official',
        text: 'Choose your plan, enter in your info, and get ready for the best in sauna products and more. Each box contains of 4-5 full-size products.',
        src: 'web',
    },
    {
        id: 2,
        title: 'Wait for Your Box',
        text: 'You can choose a monthly or quarterly subscription depending on your own needs. All products are picked for the season and delivered to your door! ',
        src: 'timer',
    },
    {
        id: 3,
        title: 'Enjoy Your Quality Sauna Time',
        text: 'Take your sauna experience to the next level with our products and feel all the benefits of saunas! ',
        src: 'saunaIcon',
    },
]