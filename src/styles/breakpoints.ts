import { useMediaQuery } from 'react-responsive';

export const sMobile = '(max-width: 16rem)'; 
export const mobile = '(max-width: 24rem)'; 
export const lMobile = '(max-width: 50rem)'; 
export const sTablet = '(max-width: 59.375rem)'; 
export const lTablet = '(max-width: 65rem)'; 
export const sDesktop = '(max-width: 90rem)'; 

export const useQuery = () => ({
	isSmMobile: useMediaQuery({ query: mobile }),
	isMobile: useMediaQuery({ query: mobile }),
	isLMobile: useMediaQuery({ query: lMobile }),
	isSmTablet: useMediaQuery({ query: sTablet }),
	isTablet: useMediaQuery({ query: lTablet }),
	isSmDesktop: useMediaQuery({ query: sDesktop }),
});