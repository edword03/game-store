import { PlatformFilter } from './PlatformFilter/PlatformFilter';
import { Sort } from '@/components/Filters/Sort/Sort';

import * as Styled from './Filters.styles';

export const Filters = ({ setSort, setPlatform }) => {
	return (
		<Styled.Block>
			<Sort setSort={setSort} />
			<PlatformFilter setPlatform={setPlatform} />
		</Styled.Block>
	);
};
