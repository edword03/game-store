import { css } from 'styled-components';

export const breakpoints = {
	uhd: 1980,
	widescreen: 1366,
	desktop: 1024,
	tablet: 768,
};

export const mediaScreen = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}px) {
			${css(...args)};
		}
	`;

	return acc;
}, {});
