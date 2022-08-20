import React, { useEffect, useState } from 'react';
import { AnimatedLoading } from '../../components/AnimatedLoading';
import { MoviesList } from '../../features/movies/MoviesList';
import { api } from '../../services/api';

import {
    Container
} from './styles';

export function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get('/movies/popular');
                setMovies(response.data);
            } catch (error) {
                console.log('error', error)
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [])

    return (
        <>
            <Container>
                {loading && <AnimatedLoading />}
                <MoviesList />
            </Container>
        </>
    );
}