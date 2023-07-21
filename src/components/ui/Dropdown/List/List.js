'use client';

import { useContext } from 'react';
import { DropdownContext } from '../context';

import * as Styled from './List.styles';

export const List = ({ children }) => {
	const { open } = useContext(DropdownContext);

	return (
		<>
			{open && (
				<Styled.ListContainer>
					<Styled.List>{children}</Styled.List>
				</Styled.ListContainer>
			)}
		</>
	);
};
