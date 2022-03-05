import Main from './components/layout/Main'
import SubPage from './components/layout/SubPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}/>
          <Route path="/sub-page/" element={<SubPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
