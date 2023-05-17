// movies.js (reducers)
const initialState = [];

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export default movies;
