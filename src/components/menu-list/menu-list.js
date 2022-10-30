import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuListItem from '../menu-list-item'
import './menu-list.scss'
import WithRestoService from '../hoc'
import { menuLoaded, menuRequested, menuError } from '../../actions'
import Spinner from '../spinner'
import Error from '../error'

class MenuList extends Component {
    componentDidMount(){
        const { RestoService, menuLoaded, menuRequested, menuError } = this.props

        menuRequested()
        RestoService.getMenuItems()
            .then( res => menuLoaded( res ) )
            .catch( err => menuError() )
    }

    render(){
        const { menuItems, loading, error } = this.props

        if( error ) return <Error />

        return (
            <ul className="menu__list">
                {
                    loading
                        ? <Spinner />
                        : menuItems.map(
                            item => <MenuListItem key={ item.id } menuItem={ item } />
                        )
                }
            </ul>
        )
    }
}

const mapStateToProps = ( { menu, loading, error } ) => {
    return {
        menuItems: menu,
        loading,
        error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()( connect( mapStateToProps, mapDispatchToProps )( MenuList ) )