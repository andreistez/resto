export const menuLoaded = menu => ( {
	type	: 'MENU_LOADED',
	payload	: menu
} )

export const menuRequested = () => ( { type: 'MENU_REQUESTED' } )

export const menuError = () => ( { type: 'MENU_ERROR' } )