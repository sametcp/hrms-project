import FavoriteAdvertisementsService from "../../Services/FavoriteAdvertisementsService";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favoriteAdvertActions";
import { favoriteItems  } from "../initialValues/favoriteAdvertItems";

const initialState = {
    favoriteItems  : favoriteItems 
}


export default function favoriteAdvertReducer (state = initialState, {type,payload}) {
    const favoriteAdvertisementsService = new FavoriteAdvertisementsService()
    switch (type) {
        case ADD_TO_FAVORITES:
            let jobAdvert = state.favoriteItems.find(f=>f.jobAdvert.id === payload.id)
            if (jobAdvert) 
            {   
                return{
                    ...state,
                    favoriteItems: state.favoriteItems.filter(f=>f.jobAdvert.id !== payload.id )
                }
            }
            else
            {
                let values = { jobAdvertId: payload.id, jobseekerId: 49 }
                favoriteAdvertisementsService.add(values)
                return{
                    ...state,
                    favoriteItems:[...state.favoriteItems,{jobAdvert: payload}]
                }
            }

        case REMOVE_FROM_FAVORITES:
            return{
                ...state,
                favoriteItems: state.favoriteItems.filter(f=>f.jobAdvert.id !== payload.id )
            }

        default:
            return state;
    }
}