import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie'
import styles from './Home.module.css'

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year')).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <section className={styles.container}> 
            {loading ? 
            <div className={styles.loader}>
                <span className={styles.loader_text}>Loading...</span>
            </div> : 
            <div className={styles.movies}>
                {movies.map( (movie) => (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}    
                        genre={movie.genres}
                    />
                ))}
            </div>
            }
        </section>
    );
}

