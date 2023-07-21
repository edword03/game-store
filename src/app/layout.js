import { Inter } from 'next/font/google';

import { Wrapper } from '@/styles/Wrapper';
import { Providers } from '@/providers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Games',
	description: 'Game list',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<main>
						<Wrapper>{children}</Wrapper>
					</main>
				</Providers>
			</body>
		</html>
	);
}
