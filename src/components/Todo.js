import React from 'react';
import { ImCross } from "react-icons/im";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const Todo = ({lists, completed, deletTask, filterProp, handelOnDragEnd, lightMode}) => {
    
    return (

        <DragDropContext onDragEnd={handelOnDragEnd}>
        <Droppable droppableId="todo">
        {(provided)=>(
            <ul className={lightMode===true? "todo todo__lightMode": "todo"} {...provided.droppableProps} ref={provided.innerRef}>
{
    lists.filter((e)=>{
        if(filterProp === "Active"){
            return e.checked === false;
        }else if(filterProp === "Completed"){
            return e.checked === true;
        }else{
            return e;
        }
    }

    )
    .map((el, index)=>{
                    return(
                        <Draggable key={el.id} draggableId={el.id.toString()} index={index}>
                        {(provided)=>(
                            <li className="todo-list"  id={el.id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
           <input className="todo-list-check" type="checkbox" name={el.id+"name"} checked={el.checked} onChange={completed}/>
           <label htmlFor={el.id+"name"} className={el.checked===true? "todo__checked": ""}>{el.task}</label>
           <button onClick={deletTask}><ImCross/></button>
           </li>
                    )}
                    
                        </Draggable>
                )

         })}





           {provided.placeholder}
        </ul>
        )

        }
        
        </Droppable>
        </DragDropContext>
    );
};

export default Todo;