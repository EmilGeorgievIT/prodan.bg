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
// TODO fix issue with add comment
export function useAddComment(postId, comment) {
    const [comment, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.create(postId, comment);
            dispatch({ type: 'ADD_COMMENT', payload: comment });
        })();
    }, [postId]);

    return [comment, dispatch];
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
