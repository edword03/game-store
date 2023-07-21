'use client';

import { forwardRef, useState } from 'react';
import { Field } from './Field';
import { List } from './List/List';
import { ListItem } from './List/ListItem/ListItem';

import * as Styled from './Dropdown.styles';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { DropdownContext } from './context';

export const Dropdown = forwardRef(
	({ children, selectedValue, setSelectedValue }, ref) => {
		const [open, setOpen] = useState(false);

		const handleToggle = () => setOpen((prevState) => !prevState);
		const handleClose = () => setOpen(() => false);

		useOutsideClick(ref, handleClose);

		return (
			<DropdownContext.Provider
				value={{
					open,
					handleToggle,
					handleClose,
					selectedValue,
					setSelectedValue,
				}}
			>
				<Styled.Container ref={ref}>{children}</Styled.Container>
			</DropdownContext.Provider>
		);
	}
);

Dropdown.displayName = 'Dropdown';

Dropdown.Field = Field;
Dropdown.List = List;
Dropdown.ListItem = ListItem;
