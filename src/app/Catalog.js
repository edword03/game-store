'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { Search } from '@/components/Search';
import { Filters } from '@/components/Filters';
import { CardList } from '@/components/CardList';
import { Loader } from '@/components/Loader';

import { gameService } from '@/api/services/game.service';
import { useDebounced } from '@/hooks/useDebounced';

export const Catalog = ({ initialData }) => {
	const [sortValue, setSortValue] = useState('');
	const [platformValue, setPlatformValue] = useState('');

	const [searchValue, setSearchValue] = useState('');

	const debouncedValue = useDebounced(searchValue, 600);

	const [page, setPage] = useState(1);

	const { ref, inView } = useInView();

	const query = {
		ordering: sortValue,
		parent_platforms: platformValue,
		search: debouncedValue,
		page,
	};

	const { fetchNextPage, data, isLoading, error, isFetchingNextPage } =
		useInfiniteQuery(
			['games-list', sortValue, debouncedValue, platformValue],
			async ({ pageParam = 0 }) =>
				await gameService.getGames({ pageParam, ...query }),
			{
				getNextPageParam: () => page ?? undefined,
			},
			initialData
		);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
			setPage((prevPage) => prevPage + 1);
		}
	}, [inView]);

	return (
		<>
			<Search search={searchValue} setSearch={setSearchValue} />
			<Filters setSort={setSortValue} setPlatform={setPlatformValue} />
			{isLoading && <Loader />}
			{error && <div>Ops. Something went wrong...</div>}
			{data && <CardList list={data} />}
			{isFetchingNextPage && <p>Loading more...</p>}
			<div ref={ref} style={{ height: 20 }}></div>
		</>
	);
};
