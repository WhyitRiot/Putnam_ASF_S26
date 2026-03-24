import React from 'react';

const App = ({name, title}) =>{
  return(
      <>
        <h1>React</h1>
        <img src="https://i.imgur.com/Ba1Ydvu.gif" alt="What"/>
        <p>Ok, I guess. {name} is fine with this.</p>
          <h2>{title}</h2>

      </>
  )
}
export default App;