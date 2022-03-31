import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ""
}


function UseFetch() {
    const [loading, setLoading] = useState(initialState.loading)
    const [post, setPost] = useState(initialState.post)
    const [error, setError] = useState(initialState.error)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError("")
        })
        .catch(
            error => {
                setLoading(false)
                setPost({})
                setError("Something went wrong!")
            }
        )
    }, [])
  return (
    <div>
        {    loading ? 'Loading' : post.body }
        {    error ? error : null }
    </div>
  )
}

export default UseFetch;