import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'

export default function Detail() {
    const [movie, setMovie] = useState([]);
    const {id} = useParams(); 
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovie(json.data.movie);
            console.log(json);
    };
    
    useEffect(() => {
        getMovie();
    },[])

    return (
        <div className={styles.detail}>
            <img src={movie.large_cover_image} alt={movie.title} title={movie.title} />
            <div className={styles.detail_data}>
                <h3 className={styles.detail_title} style={{backgroundColor:'#eee'}}>{movie.title}</h3>
                <h4 className={styles.detail_year}>{movie.year}</h4>
                <ul className={styles.detail_genres}>
                { movie.genres && movie.genres.map((g) => (<li key={g} className={styles.detail_genre}>{g}</li>))}
                </ul>
                <p className={styles.detail_summary}>{movie.description_full}</p>
            </div>

        </div>
    );
}

