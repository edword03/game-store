'use client';

import styled, { css } from 'styled-components';
import { mediaScreen } from '@/styles/media';

const StyledTitle = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${(props) => props.size || 20}px;
	font-weight: 700;
	font-size: ${(props) => props.$mobileSize}px;

	${(props) =>
		props.size &&
		css`
			${mediaScreen.tablet`
				font-size: ${props.size}px;
			`}
		`}

	${(props) =>
		props.$center &&
		css`
			text-align: center;
			${mediaScreen.tablet`
				text-align: left
			`}
		`}
`;

export const Title = ({ children, as, size, center, mobileSize }) => {
	return (
		<StyledTitle as={as} size={size} $center={center} $mobileSize={mobileSize}>
			{children}
		</StyledTitle>
	);
};
