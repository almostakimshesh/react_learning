import './App.css'
import PostList from './components/PostsList';
import NewPost from './components/NewPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <>
      <NewPost />
      <PostList/>
    </>
  )
}

export default App
