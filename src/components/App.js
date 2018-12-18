import React, {useState} from 'react';
import ResourceList from '../components/ResourceList';

export default ()=>{
    const [resource, setResource] = useState('posts');
        return(
            <div>
                <div>
                    <button onClick={()=>setResource('posts')}>Post</button>
                    <button onClick={()=>setResource('todos')}>Todos</button>
                </div>
                <ResourceList resource={resource}/>
            </div>
        )

}