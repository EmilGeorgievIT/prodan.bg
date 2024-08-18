/* eslint-disable no-extra-semi */
import { useEffect, useState } from 'react';
import * as postAPI from '../api/ads-api';

export function useGetAllPosts(postId = null) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await postAPI.getAll(postId);

            setPosts(result);
        })();
    }, [postId]);

    return [posts, setPosts];
};

export function useGetOnePost(postId) {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        (async () => {
            const result = await postAPI.getOne(postId);

            setPosts(result);
        })();
    }, [postId]);

    return [
        posts,
        setPosts,
    ];
};

export function useCreatePost() {
    const postCreateHandler = (postData) => postAPI.create(postData);

    return postCreateHandler;
};

export function useEditPosts() {
    const editPostHandler = (postData, postId) => postAPI.update(postData, postId);

    return editPostHandler;
};


export function useDeletePost() {
    const deletePostHandler = (postId) => postAPI.deleteOne(postId);

    return deletePostHandler;
};

