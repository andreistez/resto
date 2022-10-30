export default class RestoService {
	_apiBase = 'https://fakestoreapi.com/'

	getResource = async url => {
		const res = await fetch( `${ this._apiBase + url }` )

		if( ! res.ok ) throw new Error( `Couldn't fetch ${ url }, received ${ res.status }` )

		return await res.json()
	}

	getMenuItems = async () => await this.getResource( 'products' )
}
