const initialState = {
	menu: [],
	loading: true,
	error: false
}

const reducer = ( state = initialState, { type, payload } ) => {
	switch( type ){
		case 'MENU_LOADED':
			return {
				...state,
				menu: payload,
				loading: false
			}

		case 'MENU_REQUESTED':
			return {
				...state,
				loading: true
			}

		case 'MENU_ERROR':
			return {
				...state,
				loading: false,
				error: true
			}

		default:
			return state
	}
}

export default reducer