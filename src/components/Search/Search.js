'use client';

import { useState } from 'react';

import * as Styled from './Search.styles';

export const Search = ({ search = '', setSearch }) => {
	const [value, setValue] = useState(search);

	const handleChange = (event) => {
		const value = event.target.value;

		setValue(() => value);
		setSearch(() => value);
	};

	return (
		<Styled.Container>
			<Styled.InputBlock>
				<Styled.IconBlock>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="svg css-uwwqev"
						viewBox="0 0 21 20"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="scale(1 -1) rotate(-45 -11.93502884 -2)"
							stroke="currentColor"
							strokeWidth="1.65"
							fill="none"
							fillRule="evenodd"
						>
							<circle cx="7.70710678" cy="7.70710678" r="7"></circle>
							<path
								d="M15.2071068 8.62132034h5.6923881"
								strokeLinecap="square"
							></path>
						</g>
					</svg>
				</Styled.IconBlock>
				<Styled.Input type="text" value={value} onChange={handleChange} />
			</Styled.InputBlock>
		</Styled.Container>
	);
};
