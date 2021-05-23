import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorites } from "../actions/movieActions";


const FavoriteMovieList = (props) => {
    const { favorites } = props;

    const removeFavHandler = ( id ) => {
        props.removeFavorites(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites ?
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={() => removeFavHandler(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            } ) :
                <div>
                    No favorites in list
                </div>
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites,
    }
}

export default connect( mapStateToProps, {removeFavorites} )( FavoriteMovieList );