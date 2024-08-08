import React from "react";

export default (state, action) => {
    switch(action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                index: state.index + 1
                // chalanceScore: action.payload
            }

        default:
            return state;
    }
}