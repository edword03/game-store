import { useCallback, useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
	const element = ref?.current;

	const handleClick = useCallback(
		(event) => {
			if (!element || element.contains(event.target)) {
				return;
			}

			callback(event);
		},
		[callback, element]
	);

	const handleCloseEscape = useCallback(
		(event) => {
			if (event.key === 'Escape') {
				callback(event);
			}
		},
		[callback]
	);

	useEffect(() => {
		document.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleCloseEscape);

		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown', handleCloseEscape);
		};
	}, [handleClick, handleCloseEscape]);
};
