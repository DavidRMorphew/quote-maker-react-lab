import { addQuote } from "../actions/quotes";
import uuid from 'uuid'
import { quot } from "prelude-ls";

export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_QUOTE':
      const quote = {...action.quote, id: uuid()}
      return [...state, quote] 
  default:
    return state;
}
}
