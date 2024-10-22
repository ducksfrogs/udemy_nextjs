import './App.css';

const user = {
  name: "Hedy Lamarr",
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

export default function App() {
  return (
    <>
    <hi> { user.name}</hi>
    <img
      className='avatar'
      src={user.imageUrl}
      alt={'Photo of' + user.name}
      style={{
        width: user.imageSize,
        hight: user.imageSize
      }}
      />
    </>
  );
}
// import { useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return(
//     <div>
//     <h1>Welcome to my app</h1>
//     <button onClick={handleClick}>
//       You pressed me { count } times.
//     </button></div>
//   )

// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;
