import logo from './logo.svg';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome         
        </p>
        <p>UserName
        <input className="UserName login"></input>
        </p>
        <p>Password
        <input className="password login"></input>
        </p>          
        <a
          className="App-link"
          href=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='button'>Log In</button>
        </a>
        <a
          className="sign-up"
          href="./UserRegistration.js"
          target="./UserRegistration.js"
          rel="noopener noreferrer"
        >Sign up
        </a>
      </header> 
    </div>
  );
}


export default App;
