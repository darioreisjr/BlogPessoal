/* Importando a interface Action do arquivo actions.ts. */
import {Action } from './actions';


/* Defining the interface of the state. */
export interface TokenState {
    tokens: string
}

/* The initial state of the reducer. */
const initialState = {
    tokens: ""
}

/**
 * Se o tipo de ação for ADD_TOKEN, retorne um novo objeto de estado com a propriedade tokens definida como
 * carga útil da ação. Caso contrário, retorne o estado atual.
 * @param {TokenState} state - TokenState = initialState
 * @param {Action} action - Action - esta é a ação que está sendo despachada.
 * @returns O estado está sendo retornado.
 */
export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}