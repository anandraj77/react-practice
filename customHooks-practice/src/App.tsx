
import './App.css'
import ProductList from './components/ProductList'
import {useLogin} from './hooks/useLogin'
 
function App() {
  
  const {isLoggedIn, handleLogin, handleLogOut} = useLogin();

  return (
    <>
      <div>
        <button onClick={isLoggedIn? handleLogOut : handleLogin}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
        <ProductList/>
      </div>
    </>
  )
}
   
export default App
