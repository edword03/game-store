'use client';

import { CenterContainer } from './Page.styles';

export default function ErrorWrapper({ error }) {
	return (
		<CenterContainer>
			<h1>Ops! Something went wrong...</h1>
			<p>{error.message}</p>
		</CenterContainer>
	);
}
