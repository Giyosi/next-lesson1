import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from '../Redux/Reducer/Store';

const GlobalStyle = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  ul,li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a,a:hover {
    text-decoration: none;
  }

  .global {
    display: flex;
    .sidebar {
      width: 300px;
      height: 100vh;
      padding: 30px;
      position: sticky;
      top: 0;
      background-color: white;
      .sidebar_link {
        display: block;
        border: 1px solid rgba(20,65,252,1);
        border-radius: 10px;
        color: blueviolet;
        padding: 10px 20px;
      }
    }
    .content {
      flex: 1;
    }
    .active {
      background-color: rgba(164,179,242,1);
      border-radius: 10px;

    }
  }
  `;


function MyApp({ Component, pageProps }) {
  return <div className={"global"}>
    <GlobalStyle />
    <Sidebar />
    <Provider store={store} >
      <div className="content">
        <header className="header shadow p-3 d-flex justify-content-between">
          <Button variant="">
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </header>

        <Component {...pageProps} />
      </div>
    </Provider>
  </div>
}


export default MyApp
