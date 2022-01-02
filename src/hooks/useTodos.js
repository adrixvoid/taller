import { useState, useEffect, useCallback } from 'react';
import useFetch from 'use-http';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const { get, response, loading, error } = useFetch();

  const getTodos = useCallback(async () => {
    try {
      const initialTodos = await get('/todos?_limit=20');
      if (response.ok) setTodos(initialTodos);
    } catch (e) {
      console.warn(e.message);
    }
  }, [get, response]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return { todos, loading, error };
};

export default useTodos;
