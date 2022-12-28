import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSerchValue }){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSerchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };