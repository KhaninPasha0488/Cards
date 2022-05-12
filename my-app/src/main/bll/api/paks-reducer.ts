import {CardPackType, GetPacksPayloadType} from "../../dal/packs-api";
import {SetAppStatusActionType, SetUserProfileType} from "../profileReducer";
import {setAppLoading} from "../appReducer";







export type InitialPacksStateType = typeof initialPacksState;
const initialPacksState = {
        packs: {
                cardPacks: [] as CardPackType[],
                cardPacksTotalCount: 0 as number,
                maxCardsCount: 103 as number,
                minCardsCount: 0 as number,
                page: 1 as number,
                pageCount: 10 as number,
        },
        value: null as string | null,
        isLoaded: false,
        own: false,
        sliderValue: [] as number[],
        sortValue: '0created' as string,
        sortDirection: '0' as string,

}



export const packsReducer = (state:InitialPacksStateType = initialPacksState, action:ActionsType):InitialPacksStateType => {
        switch (action.type) {
                case "GET-PACKS":
                        return state



                default:
                        return state;
        } };
export const getPacksAC=() => ({type:'GET-PACKS',}as const)
type ActionsType = ReturnType<typeof getPacksAC>