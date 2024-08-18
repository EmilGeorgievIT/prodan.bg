import { useEffect, useState } from 'react';
import * as userAPI from '../api/users-api';

export function useGetAllPosts(userId = null) {
    const [users, setUsers] = useState({});

    useEffect(() => {
        (async () => {
            const result = await userAPI.getAll(userId);

            setUsers(result);
        })();
    }, [userId]);

    return [users, setUsers];
};

export function useGetOneUser(userId) {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        if (userId !== undefined) {
            (async () => {
                try {
                    const result = await userAPI.getOne(userId);
                    setUser(result);
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            })();
        }
    }, [userId]);
    
    return [
        user,
        setUser,
    ];
};
