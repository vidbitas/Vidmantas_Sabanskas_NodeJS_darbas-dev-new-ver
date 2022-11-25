// import './App.css';
import { Layout } from './components/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
// import io from 'socket.io-client';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { PostPage } from './pages/PostPage';
import { AddPostPage } from './pages/AddPostPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { EditPostPage } from './pages/EditPostPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect, useSelector } from 'react';
import { getMe } from './redux/features/auth/authSlice.js';
import { MainContext } from './context/MainContext';
import commentSlice from './redux/features/comment/commentSlice.js';

function App() {
  // const socket = io.connect('http://localhost:5000');
  // const { stateProv, setStateProv } = useSelector((state) => state);
  // const [stateProv, setStateProv] = useSelector((state) => state.auth);
  const [stateProv, setStateProv] = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effect === ', stateProv);
    dispatch(getMe());
    // socket.on('start');
    // socket.emit('start', 'aaaaaaaaaaaaaaa');
    // socket.on('start', (value) => {
    //   console.log('value === ', value);
    // });
  }, [dispatch]);
  console.log('effect === ', stateProv);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path=':id' element={<PostPage />} />
        <Route path=':id/edit' element={<EditPostPage />} />
        <Route path='new' element={<AddPostPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>

      <ToastContainer position='bottom-right' />
    </Layout>
  );
}

export default App;
