import React, { Dispatch } from 'react';


interface State {
    loading: boolean,
    language: string
}

export enum ActionType {
    SET_LOADING = 'SET_LOADING',
    SET_LANGUAGE = 'SET_LANGUAGE'
}

interface Action {
    type: ActionType,
    payload: State
}

export const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    switch (type) {

        case ActionType.SET_LOADING:
            return {
                ...state,
                loading: payload.loading
            };

        case ActionType.SET_LANGUAGE:
            return {
                ...state,
                language: payload.language
            };

        default:
            return state;
    }
}

export const initialState: State = {
    loading: false,
    language: ''
}

interface ContextType {
    state: State,
    dispatch: Dispatch<Action>
}

export const Context = React.createContext<ContextType | undefined>(undefined);