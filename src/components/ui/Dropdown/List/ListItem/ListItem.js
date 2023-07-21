'use client';

import { useContext } from 'react';
import { DropdownContext } from '../../context';

import * as Styled from './ListItem.styles';

export const ListItem = ({ children, value, text }) => {
	const { handleClose, setSelectedValue } = useContext(DropdownContext);

	const handleClick = () => {
		handleClose();
		setSelectedValue(text, value);
	};

	return (
		<Styled.Item onClick={handleClick}>
			<span>{children}</span>
		</Styled.Item>
	);
};
