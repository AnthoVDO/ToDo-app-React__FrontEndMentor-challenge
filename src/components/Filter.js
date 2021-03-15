import React from 'react';

const Filter = ({filterTask, clearComplet, filterProp, itemsLeft, lightMode}) => {
    return (
        <div className={lightMode===true? "filter filter__lightMode" : "filter"}>
        <div className="filter-items-left">{itemsLeft} items left</div>
        <div className="filter-select">
            <button onClick={filterTask} className={filterProp === "All"? "filter-select-all filter__active": "filter-select-all"}>All</button>
            <button onClick={filterTask} className={filterProp === "Active"? "filter-select-active filter__active": "filter-select-active"}>Active</button>
            <button onClick={filterTask} className={filterProp === "Completed"? "filter-select-completed filter__active": "filter-select-completed"}>Completed</button>
        </div>
        <button className="filter-clear-completed" onClick={clearComplet}>Clear Completed</button>
            
        </div>
    );
};

export default Filter;