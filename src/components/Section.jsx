import React from 'react'
import Task from './Task';

const Section = ({tab, tasks, delete_task}) => {
    const visibility_class = tab.status ? "" : "is-hidden";
    return (
        <div className={visibility_class}>
            <div className="columns">
                <div className="column">
                <h2 className="is-size-4 has-text-centered">{tab.nombre} </h2>
                </div>
            </div>  
            <div className="columns is-multiline is-mobile">
                {tasks.map(task_element =>  {
                    if(task_element.status === tab.nombre){
                        return (
                            <Task 
                                key={Math.random().toString().substring(2)}
                                task_element={task_element}
                                delete_task={delete_task}
                            />
                        )
                    }                    
                    
                })}
                
            </div>
        </div>
    )
}

export default Section