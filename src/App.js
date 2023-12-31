import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';

import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/Profile/:userId?' element={<ProfileContainer />} />
          <Route path='/Users/' element={<UsersContainer />} />
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path='/News/News' element={<News />} />
          <Route path='/Music/Music' element={<Music />} />
          <Route path='/Settings/Settings' element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
