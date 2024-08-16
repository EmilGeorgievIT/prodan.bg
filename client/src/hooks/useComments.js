import { useEffect, useReducer } from 'react';
import commentsAPI from '../api/comment-api';

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
           return action.payload.slice();
        case 'ADD_COMMENT':
           return [...state, action.payload];
        default:
            return state;
    }
};

export function useCreateComment() {
    const createHandler = (postId, comment) => commentsAPI.create(postId, comment);

    return createHandler;
};



export function useGetAllComments(postId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(postId);
            dispatch({ type: 'GET_ALL', payload: Object.values(result) });
        })();
    }, [postId]);

    return [comments, dispatch];
};
