import { ADD_TO_FAVORITES, removeFromFavorites } from "../actions/favoriteAdvertActions";
import { favoritesItems  } from "../initialValues/favoriteAdvertItems";

const initialState = {
    favoritesItems  : favoritesItems 
}


export default function favoriteAdvertReducer (state = initialState, {type,payload}) {
    switch (type) {
        case ADD_TO_FAVORITES:
            let jobAdvertisement = state.favoritesItems.find(f=>f.jobAdvertisement.id === payload.id)
            if (jobAdvertisement) 
            {
                return{
                    ...state,
                    favoritesItems: state.favoritesItems.filter(f=>f.jobAdvertisement.id !== payload.id )
                }
            }
            else
            {
                return{
                    ...state,
                    favoritesItems:[...state.favoritesItems,{jobAdvertisement:payload}]
                }
            }

        case removeFromFavorites:
            return{
                ...state,
                    favoritesItems: state.favoritesItems.filter(f=>f.jobAdvertisement.id !== payload.id )
            }

        default:
            return state;
    }
}