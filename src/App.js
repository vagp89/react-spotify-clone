import React, { useEffect, useState } from 'react';
import Login from './components/Login.js'
import { getTokenFromUrl } from './spotify'
import './App.css';
import Player from './components/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

//Run code based on a given condition
  useEffect(() => {
      //code..
     const hash = getTokenFromUrl();
     window.location.hash = "";
     const _token = hash.access_token;

     if (_token) {
       dispatch ({
         type: 'SET_TOKEN',
         token: _token,
       })
       setToken(_token)


       spotify.setAccessToken(_token);
       spotify.getMe().then((user) => {
         dispatch({
             type: 'SET_USER',
             user: user,
         });

      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists,
        })
      })


      spotify.getPlaylist("37i9dQZEVXcDDlSPLpUavu").then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
       );
    }
  }, []);

     // console.log("show me the user if exits 👱‍♂️", user)
     // console.log("show me the user if exits 🐵", token)

  return (
    <div className="app">{token ? <Player spotify={spotify} /> : <Login/>}

    </div>
  );
}

export default App;
