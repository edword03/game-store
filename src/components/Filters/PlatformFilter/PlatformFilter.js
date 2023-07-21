'use client';

import { Dropdown } from '@/components/ui/Dropdown';
import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Loader';
import { platformsService } from '@/api/services/platforms.service';

export const PlatformFilter = ({ setPlatform }) => {
	const { data, error, isLoading } = useQuery('platforms', () =>
		platformsService.getPlatforms()
	);

	const filterRef = useRef(null);

	const startValue = data?.results[0].name || '';

	const [selectedValue, setSelectedValue] = useState(startValue);

	const handleChangeSelect = (text, value) => {
		setSelectedValue(text);
		setPlatform(value);
	};

	return (
		<Dropdown
			ref={filterRef}
			selectedValue={selectedValue}
			setSelectedValue={handleChangeSelect}
		>
			<Dropdown.Field>Filter by:</Dropdown.Field>
			<Dropdown.List>
				{isLoading && <Loader />}
				{error && <p>Something went wrong...</p>}
				{data &&
					data.results.map((filter) => (
						<Dropdown.ListItem
							key={filter.id}
							value={filter.id}
							text={filter.name}
						>
							{filter.name}
						</Dropdown.ListItem>
					))}
			</Dropdown.List>
		</Dropdown>
	);
};
