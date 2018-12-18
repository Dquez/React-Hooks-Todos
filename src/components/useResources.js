import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = resource =>{
    const [resources, setResources] = useState([]);
    const fetchResource = async (resource) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data);
    }
    useEffect(()=>{
        fetchResource(resource)
    }, [resource])
    // checks to see if the value resource is the same as the previous render, if it is, don't invoke inner function 
    // if you want useEffect to be called everytime, don't pass the array at all
    // if you want useEffect to be called only once, pass in an empty array
    // if u want to check, pass in a value that changes
    return resources;
}

export default useResources;