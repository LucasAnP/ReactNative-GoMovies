import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedLoading } from '../../components/AnimatedLoading';
import { MovieCardHorizontal } from '../../components/MovieCardHorizontal';
import { MovieCardVertical } from '../../components/MovieCardVertical';
import { fetchMovies, getMoviesError, getMoviesStatus, selectAllMovies } from '../../store/ducks/moviesSlice';

import {
    Container, ListContainer, RecommendedMoviesContainer, Title, TrendingMoviesContainer
} from './styles';

export function Home() {
    const dispatch = useDispatch();

    const movies = useSelector(selectAllMovies);
    const moviesStatus = useSelector(getMoviesStatus);
    const error = useSelector(getMoviesError);
    useEffect(() => {
        dispatch(fetchMovies());
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
                        <Title>Recommended</Title>
                        <ListContainer>
                            <FlatList
                                data={movies}
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