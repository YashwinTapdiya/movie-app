export default function movies (state = [] , action){
    if(actions.type === 'ADD_MOVIES'{
        return action.movies;
    })
    else{
        return state;
    }
}