import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css'

export default function Movie({id,year,title,summary,poster,genre}) {
    return (
        <div className={styles.movie}>
            <Link 
                to={`/movie/${id}`}
                state={{year,title,summary,poster,genre}}
            >
                <img src={poster} alt={title} title={title} />
                <div className={styles.movie_data}>
                    <h3 className={styles.movie_title}>{title}</h3>
                    <h4 className={styles.movie_year}>{year}</h4>
                    <ul className={styles.movie_genres}>
                        {
                            genre.map((g) => (<li className={styles.movie_genre} key={g}>{g}</li>))
                        }
                    </ul>
                    <p className={styles.movie_summary}>{summary.slice(0,180)} ...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};