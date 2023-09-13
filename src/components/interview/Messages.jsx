

// Memoized Hooks API


// We can rely on useMemo as a performance optimization


// https://reactjs.org/docs/hooks-reference.html
// https://reactjs.org/docs/hooks-reference.html#usememo  
//
// React 16.8  2019 June

// import React, {useState} from 'react'
// import Messages from './components/interview/Messages'


// const App = () => {
//     const [count,setCount]=useState(0)
    
//     const [count1,setCount1]=useState(100)

//     console.log('App is Rendering')

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={()=>(setCount(count+1))}>Increment</button>

//       {/* <button onClick={()=>(setCount1(count1-1))}>Decrement</button> */}
      
//       <Messages />

//     </div>
//   )
// }

// export default App

import React, {memo} from 'react'

const Messages = ({noMessages}) => {

    console.log('Decrement component is Rendering')

  return (
    <div>Decrement {noMessages} Messages</div>
  )
}

export default memo(Messages)
















































































// import React, { memo } from 'react'

// const Messages = ({noMessages}) => {
//     console.log('Message Rendering')
//     return (
//         <div><p>Send {noMessages} Messages</p></div>
//     )
// }

// export default memo(Messages);