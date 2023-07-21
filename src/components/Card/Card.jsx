import Image from 'next/image';
import Link from 'next/link';
import * as Styled from './Card.styles';
import { Title } from '@/components/ui/Title';

export const Card = ({ slug, title, poster, rating, date }) => {
	return (
		<Styled.Card>
			<Styled.Wrapper>
				<Styled.ImageContainer>
					<Image
						width={100}
						height={100}
						sizes="100vw"
						src={poster || ''}
						style={{ width: '100%', height: '170px', objectFit: 'cover' }}
						alt={`${title} poster`}
					/>
				</Styled.ImageContainer>
				<Styled.Info>
					<Styled.Head>
						<Title as="p" size={24}>
							<Link href={`/game/${slug}`}>
								<Styled.LinkText>{title}</Styled.LinkText>
							</Link>
						</Title>
					</Styled.Head>
					<p>rating: {rating}</p>
					<p>date: {date}</p>
				</Styled.Info>
			</Styled.Wrapper>
		</Styled.Card>
	);
};
