import React, {useState} from 'react';
import ResourceList from '../components/ResourceList';
import UserList from '../components/UserList';

export default ()=>{
    const [resource, setResource] = useState('posts');
        return(
            <div>
                <UserList />
                <div>
                    <button onClick={()=>setResource('posts')}>Post</button>
                    <button onClick={()=>setResource('todos')}>Todos</button>
                </div>
                <ResourceList resource={resource}/>
                
            </div>
        )

}