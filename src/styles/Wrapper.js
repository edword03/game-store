'use client';

import styled from 'styled-components';
import { breakpoints, mediaScreen } from '@/styles/media';

export const Wrapper = styled.div`
	width: 100%;
	padding: 0 10px;

	${mediaScreen.tablet`
    padding: 0 20px;
    margin: 0 auto;
  `}

	${mediaScreen.desktop`
    max-width: ${breakpoints.desktop}px;
    padding: 0 40px;
  `}
`;
