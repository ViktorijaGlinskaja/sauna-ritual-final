export type Colors = keyof typeof colors;

const colors = {
	primary: 'rgb(0, 48, 87)',
	secondary: 'rgba(0, 0, 0, 0.6)',
	blue: '#a6bde7',
	yellow: '#ffeadf',
	red: '#ffc8b7',
	accent: '#3e7dec',
	white: '#FFFFFF',
};

export const theme = {
	colors,
	fontFamily: { primary: 'Lato', secondary: `PT serif` },
	fontSizes: {
		fs14: '0.875rem',
		fs16: '1rem',
		fs18: '1.125rem',
		fs24: '1.5rem',
		fs48: '3rem',
		fs64: '4rem',
	},
	fontWeights: {
		fw400: 400,
		fw500: 500,
		fw600: 600,
		fw700: 700,
	},
	lineHeight: {
		lh16: '1rem',
		lh20: '1.25rem',
		lh24: '1.5rem',
		lh28: '1.75rem',
		lh30: '1.875rem',
		lh32: '2rem',
		lh58: '3.625rem',
		lh78: '4.875rem',
	},
	breakpoints: ['16rem', '24rem', '50rem', '59.375rem', '65rem', '90rem'] as unknown as Breakpoints,
	space: {
		double: 's16 s24',
		auto: 'auto',
		s0: '0rem',
		s8: '0.5rem',
		s12: '0.75rem',
		s16: '1rem',
		s24: '1.5rem',
		s32: '2rem',
		s48: '3rem',
		s64: '4rem',
		s80: '5rem',
		s96: '6rem',
		s192: '12rem',
	},
	radii: {
		r4: '0.25rem',
		r16: '1rem',
		r20: '1.25rem',
		r24: '1.5rem',
		r30: '1.875rem',
		r80: '5rem',
	},
	zIndices: {
		base: 0,
		upper: 1,
		modal: 10,
		loader: 11,
	},
	typography: {
		h1: {
			fonstSize: '5rem',
			fontSizeMobile: '4rem',
			lineHeight: '6.5rem',
			lineHeightMobile: '5.25rem',
			fontWeight: 500,
		},
		h2: {
			fonstSize: '4.5rem',
			fontSizeMobile: '2.875rem',
			lineHeight: '5.875rem',
			lineHeightMobile: '4.5625rem',
			fontWeight: 500,
		},
		h3: {
			fonstSize: '3.2rem',
			fontSizeTablet: '3rem',
			fontSizeMobile: '2rem',
			lineHeight: '4rem',
			lineHeightMobile: '3rem',
			fontWeight: 500,
		},
		h4: {
			fonstSize: '3rem',
			fontSizeMobile: '2rem',
			lineHeight: '3.9375rem',
			lineHeightMobile: '2.625rem',
			fontWeight: 600,
		},
		h5: {
			fonstSize: '2.5rem',
			fontSizeMobile: '1.625rem',
			lineHeight: '3.25rem',
			lineHeightMobile: '2rem',
			fontWeight: 500,
		},
		h6: {
			fonstSize: '2rem',
			fontSizeMobile: '1.5rem',
			lineHeight: '2.625rem',
			lineHeightMobile: '2rem',
			fontWeight: 500,
		},
		body18: {
			fonstSize: '1.125rem',
			lineHeight: '1.75rem',
			lineHeightMobile: '1.2rem',
			fontWeight: 500,
		},
		body16: {
			fonstSize: '1rem',
			lineHeight: '2rem',
			lineHeightMobile: '1.2rem',
			fontWeight: 400,
		},
		caption14: {
			fonstSize: '0.875rem',
			lineHeight: '1rem',
			fontWeight: 500,
		},
	},
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.smobile = Breakpoints[0];
Breakpoints.lmobile = Breakpoints[1];
Breakpoints.stablet = Breakpoints[2];
Breakpoints.ltablet = Breakpoints[3];
Breakpoints.smdesktop = Breakpoints[4];
Breakpoints.desktop = Breakpoints[5];

type Breakpoints<T = string> = {
	_: T;
	smobile: T;
	lmobile: T;
	stablet: T;
	ltablet: T;
	smdesktop: T;
	desktop: T;
};