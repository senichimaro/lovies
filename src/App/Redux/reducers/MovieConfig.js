import { createSlice } from '@reduxjs/toolkit'

const MovieConfigSlice = createSlice({
    name: 'config',
    initialState: {
        isLoading: true,
        images: {},
        genre: [],
        trending: [],
        movie: {},
        currentUser: null
    },
    reducers: {        
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setImages: (state, action) => {
            state.images = action.payload
        },
        setGenre: (state, action) => {
            state.genre = action.payload
        },
        setTrending: (state, action) => {
            state.trending = action.payload
        },
        setMovie: (state, action) => {
            state.movie = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const {
    setIsLoading,
    setImages,
    setGenre,
    setTrending,
    setMovie,
    setCurrentUser,
} = MovieConfigSlice.actions

export const getIsLoading = state => state.config.isLoading
export const getImages = state => state.config.images
export const getGenre = state => state.config.genre
export const getTrending = state => state.config.trending
export const getMovie = state => state.config.movie
export const getCurrentUser = state => state.config.currentUser

export default MovieConfigSlice.reducer