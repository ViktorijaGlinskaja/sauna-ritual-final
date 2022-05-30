export interface Category {
    id: number;
    title: string;
    text: string;
    src: string;
}

export const BENEFITS: Category[] = [
    {
        id: 1,
        title: 'SAUNAS IMPROVE OVERALL HEALTH, WELLNESS AND PERFORMANCE',
        text: 'Not surprisingly, sauna bathers most frequently cite “stress reduction” as the number one benefit of sauna use. Studies show the majority of disease (e.g. heart disease) is at least partially stress-related.',
        src: 'clipboard'
    },
    {
        id: 2,
        title: 'IMPROVES HEART HEALTH',
        text: 'Regular sauna usage has been shown to reduce the risk of all-cause mortality and fatal cardiac incidents along with reduced risk of stroke and hypertension.',
        src: 'rate'
    },
    {

        id: 3,
        title: 'SAUNAS AID IN RECOVERY AFTER EXERCISE',
        text: 'After physical activity, use the heat and steam of a sauna to promote muscle relaxation by helping to reduce muscle tension and eliminate lactic acid and other toxins that may be present.',
        src: 'gym'
    },
    {
        id: 4,
        title: 'SAUNAS FLUSH TOXINS',
        text: 'Deep sweating in a sauna can help reduce levels of lead, copper, zinc, nickel, mercury and chemicals - which are all toxins commonly absorbed just from interacting with our daily environments.',
        src: 'poison'
    },
    {
        id: 5,
        title: 'IMPROVE BRAIN HEALTH',
        text: 'A 25-year study conducted with more than 2,300 participants revealed regular sauna use (4-7 times per week) at 176 degrees F for 19 minutes lowered the risk for both Alzheimer’s & Dementia.',
        src: 'brain'
    },
    {
        id: 6,
        title: 'SAUNAS RELIEVE STRESS',
        text: 'Sauna bathing reduces the levels of cortisol in our blood, and instead it stimulates the production of serotonin. Serotonin is our “happy hormone” that makes us feel good.',
        src: 'happy'
    },
]