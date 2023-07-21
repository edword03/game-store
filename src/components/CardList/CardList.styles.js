'use client';

import styled from 'styled-components';
import { Card } from '@/components/Card/Card.styles';
import { mediaScreen } from '@/styles/media';

export const Section = styled.section``;

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	${Card}:not(:last-child) {
		margin-bottom: 15px;
	}

	${mediaScreen.tablet`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 15px
  `}

	${mediaScreen.desktop`
    grid-template-columns: repeat(3, 1fr);
    gap: 15px 20px
  `}
`;
