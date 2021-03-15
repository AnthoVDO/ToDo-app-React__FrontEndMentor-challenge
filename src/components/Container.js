import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Input from './Input';
import Todo from './Todo';
import {useState} from 'react';
const Container = ({lightMode, lightOn}) => {

    const [lists, setLists] = useState([{
        id:1,
        checked:true,
        task:"Complete online JavaScript course"
    },
    {   
        id:2,
        checked:false,
        task:"Jog around the park 3x"
    },
    {   id:3,
        checked:false,
        task:"10 minutes meditation"
    },
    {   id:4,
        checked:false,
        task:"Read for 1hour"
    },
    { id:5,
        checked:false,
        task:"Pick up groceries"
    },
    { id:6,
        checked:false,
        task:"Complete ToDo App on FrontEnd Mentor"
    }])

        
    const [filterProp, setFilterProp] = useState("All")
//creat new task
    const NewComponent = (e) => {
        e.preventDefault();
        let id = new Date();
        id = parseInt(Date.parse(id), 16); //The created date is transformed in millisecond and then to hexacode
        const text = e.currentTarget.previousSibling.value;
        if(text === ""){
            return prompt("You need to add a text");
        }
        const checked = e.currentTarget.parentNode.querySelector('.input-check').checked;
        let newTask = {id:id, checked: checked, task:text };
        e.currentTarget.previousSibling.value = "";
        return [setLists([...lists, newTask]), setTaskOrder([...taskOrder, newTask])];
         
    }
// mark as completed
    const completed = (e) => {
        const myElement = e.target.parentNode.id;
        setLists(lists.map((el)=> el.id.toString() === myElement? {...el, checked: !el.checked} : el))
        return setTaskOrder(taskOrder.map((el)=> el.id.toString() === myElement? {...el, checked: !el.checked} : el));
        
    }

// delet a task
    const deletTask = (e) => {
        const myElement = e.currentTarget.parentNode.id;
        console.log(myElement)
        setLists(lists.filter(el=>el.id.toString() !== myElement ))
        return setTaskOrder(taskOrder.filter(el=>el.id.toString() !== myElement ));
        
    }
// filter 
    const filterTask = (e) => {
        const tempFilterValue = e.currentTarget.innerText.toString();
        if(tempFilterValue === "Active"){
            return setFilterProp(tempFilterValue);
            
        }else if(tempFilterValue === "Completed"){
            return setFilterProp(tempFilterValue);
            
        }else{
            return setFilterProp("All");
        }   
    }

// Clear completed

    const clearComplet = () => {
        setLists(
            lists.filter(x=>{
                return x.checked === false;
            })
        )
        setTaskOrder(
            taskOrder.filter(x=>{
                return x.checked === false;
            })
        )
    }

    

// drag and drop

const [taskOrder, setTaskOrder] = useState(lists)
    const handelOnDragEnd = (result)=>{
        console.log(taskOrder);
        if(!result.destination) return
       const items = Array.from(taskOrder);
       const [reorderItem] = items.splice(result.source.index, 1);
       items.splice(result.destination.index, 0, reorderItem);
       setTaskOrder(items)
    }

// Items left
let itemsLeft = taskOrder.filter(el=>el.checked === false).length;



    return (
        <div className="container">
            <Header lightOn={lightOn} lightMode={lightMode}/>
            <Input NewComponent={NewComponent} lightMode={lightMode}/>
            <Todo lists={taskOrder} completed={completed} deletTask={deletTask} filterProp={filterProp} handelOnDragEnd={handelOnDragEnd} lightMode={lightMode}/>
            <Filter filterTask={filterTask} clearComplet={clearComplet} filterProp={filterProp} itemsLeft={itemsLeft} lightMode={lightMode}/>
            <div className="bottom"><h3>Drag and drop to reorder list</h3></div>

        </div>
    );
};

export default Container;