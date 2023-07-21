'use client';

import styled from 'styled-components';

export const Card = styled.div`
	width: 100%;
`;

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	border-radius: ${({ theme }) => theme.borders.borderRadiusDefault};
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	position: relative;
`;

export const Info = styled.div`
	padding: 16px;
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LinkText = styled.span`
	transition: color 0.3s;

	&:hover {
		color: hsla(0, 0%, 100%, 0.4);
	}
`;
