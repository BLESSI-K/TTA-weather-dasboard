import React from 'react'

export default function WelcomeComponent() {
    const fruits = [{id: 1, name: 'Apple', color: 'red'},
    {id: 2, name: 'Banana', color: 'yellow'},
    {id: 3, name: 'Grapes', color: 'purple'},
    {id: 4, name: 'Orange', color: 'orange'},
    {id: 5, name: 'Mango', color: 'green'}
    ]

  return (
    
    <div style={{ padding: '10px', backgroundColor: 'green', color: '#fff' }}>
       <div> Welcome To the app</div>
       <div>
        <h2>
            Fruits List
        </h2>
        <ul>
            {fruits.map((fruit) => (
                <li className={fruit.color} style={{listStyle: 'none'}} key={fruit.id}>{fruit.name}</li>
                ))}
        </ul>
       </div>
        
    </div>
  )
}
