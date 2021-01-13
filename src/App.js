import logo from './logo.svg';
import './App.css';
import Header from './container/Header/header';
import Footer from './container/Footer/footer';
import Layout from './components/layout/layout';
import Products from './container/products/products';
import SignUp from './components/Auth/Signup/signup';
import Auth from './components/Auth/auth';



function App() {
  return (
    <div className="App">  
      <Header />
      <Products />
      <Auth />
      <Layout />
         </div>
        
  );
}

export default App;
