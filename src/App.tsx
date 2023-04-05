import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { CharacterPage } from './pages/CharacterPage';

function App() {
  return (
    <>  
    <Routes>
    <Route path="/" element={<MainPage />}></Route>
        <Route path="/:characterId" element={<CharacterPage />} />
        <Route path="*" element={<h2>Page is not found</h2>} />
      </Routes>
    </>
  )
}

export default App;
