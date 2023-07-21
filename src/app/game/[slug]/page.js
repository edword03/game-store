import Link from 'next/link';
import Image from 'next/image';
import { MetaBlock } from '@/components/ui/MetaBlock';
import { Title } from '@/components/ui/Title';
import { SliderScreens } from '@/components/Slider';

import { gameService } from '@/api/services/game.service';

import * as Styles from './Page.styles';

async function getGame(id) {
	return gameService.getGameDetail(id);
}

export async function generateMetadata({ params: { slug } }) {
	const game = await getGame(slug);

	return {
		title: game.name,
	};
}

export default async function GamePage({ params: { slug } }) {
	const result = await getGame(slug);

	const screenshots = await gameService.getScreenshots(slug);

	return (
		<>
			<Title size={45} mobileSize={26}>
				{result.name}
			</Title>
			<Image
				src={result.background_image}
				width={100}
				height={0}
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
				alt={`${result.name} poster`}
			/>

			<Styles.MetaContainer>
				{result.rating && <MetaBlock title="Rating">{result.rating}</MetaBlock>}
				{result.metacritic && (
					<MetaBlock title="Metascore">{result.metacritic}</MetaBlock>
				)}
				{result.released && (
					<MetaBlock title="Realised">{result.released}</MetaBlock>
				)}
				{result.website && (
					<MetaBlock title="Website">
						<Link href={result.website}>{result.website}</Link>
					</MetaBlock>
				)}
			</Styles.MetaContainer>
			<div dangerouslySetInnerHTML={{ __html: result.description }}></div>
			<Styles.SliderSection>
				<SliderScreens slides={screenshots} altTitle={result.name} />
			</Styles.SliderSection>
		</>
	);
}
