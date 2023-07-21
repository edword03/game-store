'use client';

import { useContext } from 'react';
import { DropdownContext } from './context';

import * as Styled from './Dropdown.styles';

export const Field = ({ children }) => {
	const { handleToggle, selectedValue } = useContext(DropdownContext);

	return (
		<Styled.Field onClick={handleToggle}>
			<span>{children}</span>
			<span>{selectedValue}</span>
		</Styled.Field>
	);
};
