import { Fragment } from 'react';
import { Card } from '@/components/Card';

import * as Styled from './CardList.styles';

export const CardList = ({ list }) => {
	return (
		<>
			<Styled.Section>
				<Styled.Container>
					{list &&
						list.pages.map((page) => (
							<Fragment key={page.next}>
								{page && !page.results.length && <p>Not found...</p>}

								{page &&
									page.results.map((card) => (
										<Card
											key={card.id}
											slug={card.slug}
											title={card.name}
											poster={card.background_image}
											rating={card.rating}
											date={card.released}
										/>
									))}
							</Fragment>
						))}
				</Styled.Container>
			</Styled.Section>
		</>
	);
};
