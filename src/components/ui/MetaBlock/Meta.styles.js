'use client';

import styled from 'styled-components';

export const Block = styled.div`
	&:not(:last-child) {
		margin-right: 10px;
	}
`;

export const Title = styled.div`
	color: rgba(255, 255, 255, 0.2);
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 8px;
`;
export const Text = styled.div`
	color: ${({ theme }) => theme.colors.white};
	font-size: 14px;

	a {
		text-decoration: underline;
	}
`;
