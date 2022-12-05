import React from 'react'
import Section from './Section'

const Content = ({tabs, tasks, delete_task}) => {
  return (
    <>
        {
            tabs.map(tab => (
                <Section 
                    key={Math.random().toString().substring(2)}
                    tab={tab}
                    tasks={tasks}
                    delete_task={delete_task}
                />
            ))
        }
    </>
  )
}

export default Content