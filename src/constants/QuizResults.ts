export interface Result {
    id?: number,
    title?: string,
    info?: string,
}

export const RESULTS: Result[] = [
    {
        id: 1,
        title: 'Dry',
        info: 'Typically, a sauna’s a very hot room heated through a wood stove, a generator, or an electric or infrared heater. Comparatively, a dry sauna uses a much lower heat somewhere around 140 degrees Fahrenheit. As you walk into a dry sauna, your heart rate raises which helps to get blood circulating. One’s metabolism also speeds up temporarily, helping to burn off weight through sweating and fat-burning.',
    },
    {
        id: 2,
        title: 'Traditional',
        info: 'A traditional sauna maintains some of the highest heat of any sauna. Traditional dry saunas use temperatures sometimes as high as 195 degrees Fahrenheit. This can be very overwhelming to someone who is sensitive to heat which is why this isn’t a preferred sauna type.',
    },
    {
        id: 3,
        title: 'Steam',
        info: 'Steam saunas use wet heat which is known to help open up airways and thins out mucus membranes in the body, alleviating congestion and improving respiratory strength. If you’re suffering from asthma or bronchitis, a steam sauna’s an excellent therapy to try. It’s also been shown to increase metabolism, cause some weight loss, remove toxins, remove impurities from skin, and eradicate blackheads.',
    },
    {
        id: 4,
        title: 'Infrared',
        info: ' Some scientific studies have shown sitting in an infrared sauna is like doing a moderately intense cardio workout. It doesn’t feel like that while you’re inside but this is the sort of response the body generates. It’s actually really amazing! Another reason why a lot of people buy infrared saunas is because they produce all these responses and health benefits at temperatures lower than a traditional sauna. For people who don’t tolerate heat well, this is definitely a recommended option.',
    }
]