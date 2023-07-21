import { Title } from '@/components/ui/Title';

import { gameService } from '@/api/services/game.service';
import { Catalog } from './Catalog';

export const metadata = {
	title: 'Games | Catalog',
	description: 'Game list catalog',
};

export default async function Home() {
	const response = await gameService.getGames();

	return (
		<main>
			<Title size={50} mobileSize={32} center>
				Games catalog
			</Title>
			<Catalog initialData={response} />
		</main>
	);
}
