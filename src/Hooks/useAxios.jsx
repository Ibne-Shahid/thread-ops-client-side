import axios from 'axios'
import React from 'react'

const useAxios = () => {

    const fetchAxios = axios.create({
        baseURL: 'http://localhost:5000'
    })

  return fetchAxios;
}

export default useAxios