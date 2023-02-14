import './App.css';

function App() {
  
  fetch('perenual.com/api/species-list?page=1&key=sk-pAbh63ebe77c9f26e54')
  .then(data => data.json())
  .then(data => console.log('crops data', data))
  
  // only getting 10 results  
//  fetch('https://www.growstuff.org/api/v1/crops')
 //   .then(data => data.json())
//    .then(data => console.log('crops data', data.data))

  return (
    <div className="App">
      <h1>plantr</h1>
    </div>
  )
}

export default App
