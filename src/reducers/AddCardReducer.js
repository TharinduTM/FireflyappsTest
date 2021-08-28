import { FETCH_BUTTON_CLICK, REMOVE_CARD } from '../actions/Types';

const initialState = {
  cards: []
}

const cardReducer = (state= initialState, action) =>{
    switch(action.type){
      case FETCH_BUTTON_CLICK:
        const newCard={
          id: action.payload.id,
          size: action.payload.size,
          price: action.payload.price,
          title: action.payload.title
        }

        const addedCard = [...state.cards, newCard]
        return {
          ...state,
          cards: addedCard
        }

        case REMOVE_CARD:
          const filterCard = state.cards.filter((t)=>t.id!==action.payload);
          return {
            ...state,
          cards: filterCard
          }
      default:
        return state

  }
}

export default cardReducer
