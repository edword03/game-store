import * as Styled from './Meta.styles';

export const MetaBlock = ({ title, children }) => {
	return (
		<Styled.Block>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Text>{children}</Styled.Text>
		</Styled.Block>
	);
};
