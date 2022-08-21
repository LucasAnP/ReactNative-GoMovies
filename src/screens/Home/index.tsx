import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedLoading } from '../../components/AnimatedLoading';
import { MovieCardHorizontal } from '../../components/MovieCardHorizontal';
import { MovieCardVertical } from '../../components/MovieCardVertical';
import { fetchMovies, fetchRecommendedMovies, getMoviesError, getMoviesStatus, selectAllMovies, selectAllRecommendedMovies } from '../../store/ducks/moviesSlice';

import {
    Container, ListContainer, RecommendedMoviesContainer, Title, TrendingMoviesContainer
} from './styles';

export function Home() {
    const dispatch = useDispatch();

    const movies = useSelector(selectAllMovies);
    const recommendedMovies = useSelector(selectAllRecommendedMovies);

    const moviesStatus = useSelector(getMoviesStatus);
    const error = useSelector(getMoviesError);

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchRecommendedMovies())
    }, [dispatch]);

    useEffect(() => {
        if (movies) {
        }
    }, [movies])

    return (
        <>
            <Container>
                <StatusBar translucent={true} />
                {moviesStatus === 'loading' && <AnimatedLoading />}
                <ScrollView>
                    <TrendingMoviesContainer>
                        <Title>Trending</Title>
                        <ListContainer>
                            <FlatList
                                data={movies}
                                renderItem={({ item }) => <MovieCardHorizontal imageUrl={item.image} title={item.title} info={item.info} date={item.date} />}
                                showsVerticalScrollIndicator={false}
                                horizontal
                            // onEndReached={fetchWords}
                            // ListFooterComponent={renderFooter}
                            />
                        </ListContainer>

                    </TrendingMoviesContainer>
                    <RecommendedMoviesContainer>
                        <Title>Most Watched</Title>
                        <ListContainer>
                            <FlatList
                                data={recommendedMovies}
                                renderItem={({ item }) => <MovieCardVertical imageUrl={item.image} title={item.title} info={item.info} date={item.date} />}
                                showsVerticalScrollIndicator={false}
                            // onEndReached={fetchWords}
                            // ListFooterComponent={renderFooter}
                            />
                        </ListContainer>
                    </RecommendedMoviesContainer>
                </ScrollView>
            </Container>
        </>
    );
}