import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AnimatedLoading } from "../../components/AnimatedLoading";
import { MovieCardHorizontal } from "../../components/MovieCardHorizontal";
import { MovieCardVertical } from "../../components/MovieCardVertical";
import { MovieClickedModal } from "../../components/MovieClickedModal";
import {
    fetchMovies,
    fetchRecommendedMovies,
    getMoviesError,
    getMoviesStatus,
    selectAllMovies,
    selectAllRecommendedMovies,
} from "../../store/ducks/moviesSlice";

import {
    Container,
    ListContainer,
    RecommendedMoviesContainer,
    Title,
    TrendingMoviesContainer,
} from "./styles";

export function Home() {
    const dispatch = useDispatch();

    const movies = useSelector(selectAllMovies);
    const recommendedMovies = useSelector(selectAllRecommendedMovies);

    const moviesStatus = useSelector(getMoviesStatus);
    const error = useSelector(getMoviesError);

    const [modalActive, setModalActive] = useState(false);
    const [movieClicked, setMovieClicked] = useState({
        image: '',
        title: '',
        date: '',
        detailedInfo: ''
    });

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchRecommendedMovies());
    }, [dispatch]);


    return (
        <>
            <Container>
                <StatusBar translucent={true} />
                {movieClicked && <MovieClickedModal visible={modalActive} data={movieClicked} setVisible={setModalActive} />}
                {moviesStatus === "loading" && <AnimatedLoading />}
                <ScrollView>
                    <TrendingMoviesContainer>
                        <Title>Trending</Title>
                        <ListContainer>
                            <FlatList
                                data={movies}
                                renderItem={({ item }) => (
                                    <MovieCardHorizontal
                                        activeOpacity={0.7}
                                        imageUrl={item.image}
                                        title={item.title}
                                        info={item.info}
                                        date={item.date}
                                        onPress={() => { setModalActive(true); setMovieClicked(item) }}
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                                horizontal
                            />
                        </ListContainer>
                    </TrendingMoviesContainer>
                    <RecommendedMoviesContainer>
                        <Title>Most Watched</Title>
                        <ListContainer>
                            <FlatList
                                data={recommendedMovies}
                                renderItem={({ item }) => (
                                    <MovieCardVertical
                                        activeOpacity={0.7}
                                        imageUrl={item.image}
                                        title={item.title}
                                        info={item.info}
                                        date={item.date}
                                        onPress={() => { setModalActive(true); setMovieClicked(item) }}
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        </ListContainer>
                    </RecommendedMoviesContainer>
                </ScrollView>
            </Container>
        </>
    );
}
