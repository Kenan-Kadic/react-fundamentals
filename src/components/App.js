import React, { useState } from "react";
import String from '../components/string/String';
import Counter from '../components/counter/Counter';
import useFetch from '../components/useFetch/useFetch';

const App = () => {

    const { data } = useFetch();
    const { results } = data || [];

    return (
        <div className="App">   
            <String />
            <Counter />

            {results && 
            results.map((user) => {
                console.log('USER OBJECT', user);
                return (
                    <ul key = {user.id.value}>
                        <li>{user.name.first}</li>
                        <li>{user.gender}</li>
                        <li>{user.email}</li>
                        <li>
                            <img src = {data.results[0].picture.medium} alt='random user'/>
                        </li>
                    </ul>
                );
            })}
            
        </div>
    );
};
export default App