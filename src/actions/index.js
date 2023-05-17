// {
//     type: 'ADD_MOVIES',
//     movies: []




    
// }

// {
//     type: "DECREASE_COUNT"
// }

//this variables are called action types
export const ADD_MOVIES = 'ADD_MOVIES';

//this functions are called action creator
export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}