import { useState, useEffect, useCallback } from 'react';
import useFetch from 'use-http';

const UsersPaper = () => {
  const [users, setUsers] = useState([]);
  const { get, response, loading, error } = useFetch();

  const getUsers = useCallback(async () => {
    try {
      const initialUsers = await get('/users?_limit=20');
      if (response.ok) setUsers(initialUsers);
    } catch (e) {
      console.warn(e.message);
    }
  }, [get, response]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, loading, error };
};

export default UsersPaper;
