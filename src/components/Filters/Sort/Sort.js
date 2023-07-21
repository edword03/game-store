'use client';

import { useRef, useState } from 'react';
import { Dropdown } from '@/components/ui/Dropdown';

const sort = [
	{
		id: '1',
		value: 'all',
		text: 'All',
	},
	{
		id: '2',
		value: '-rating',
		text: 'Rating (highest)',
	},
	{
		id: '3',
		value: 'rating',
		text: 'Rating (lowest)',
	},
	{
		id: '4',
		value: 'released',
		text: 'Date (up)',
	},
	{
		id: '5',
		value: '-released',
		text: 'Date (down)',
	},
];

export const Sort = ({ setSort }) => {
	const sortRef = useRef(null);

	const startValue = sort[0].text;
	const [selectedValue, setSelectedValue] = useState(startValue);

	const handleChangeSelect = (text, value) => {
		if (text === 'all') return;
		setSelectedValue(text);
		setSort(value);
	};

	return (
		<Dropdown
			ref={sortRef}
			selectedValue={selectedValue}
			setSelectedValue={handleChangeSelect}
		>
			<Dropdown.Field>Sort by:</Dropdown.Field>
			<Dropdown.List>
				{sort.map((filter) => (
					<Dropdown.ListItem
						key={filter.id}
						value={filter.value}
						text={filter.text}
					>
						{filter.text}
					</Dropdown.ListItem>
				))}
			</Dropdown.List>
		</Dropdown>
	);
};
