import React from 'react'
import axios from 'axios'

export const News = async () => {
    try {
      const { data } = await axios.get(
        "https://atendi-backend.onrender.com/api/posts", {headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjcyMmQxZGE4ZmRmOGRjYzc0MzRhZiIsImlhdCI6MTY5MzM5ODU4MiwiZXhwIjoxNjk1OTkwNTgyfQ.C4M0FCxTP3b0kj-5YSj-K1lYhiIWdXX1PwZZi3OROvY` }
    });
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };


  export const newsDetails = async (id) => {
    console.log(id)
    try {
      const { data } = await axios.get(
        `https://atendi-backend.onrender.com/api/posts/${id}`, {headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjcyMmQxZGE4ZmRmOGRjYzc0MzRhZiIsImlhdCI6MTY5MzM5ODU4MiwiZXhwIjoxNjk1OTkwNTgyfQ.C4M0FCxTP3b0kj-5YSj-K1lYhiIWdXX1PwZZi3OROvY` }
    });
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };