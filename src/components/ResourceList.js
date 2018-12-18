import React from 'react';
import useResources from './useResources'

const ResourceList = ({resource}) =>{
    const resources = useResources(resource);
    return(
        <ul>{resources.map((record, i)=>{
            return <li key={i}>{record.title}</li>
        })}</ul>
    )
    
}

export default ResourceList;