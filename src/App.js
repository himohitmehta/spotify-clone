import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify/spotify";
import { useDataLayerValue } from "./StateProvider/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	//const [token, setToken] = useState(null);
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {

			dispatch({
				type:"SET_TOKEN",
				token:_token,
			})
			// setToken(_token);
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log("😂🤣😎", user);

				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type:"SET_PLAYLISTS",
					playlists: playlists,
					 
				})
			})

			spotify.getPlaylist().then(response => {
				dispatch({
					type:'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				})
			})



		}
		console.log("I have a Token>>> 😂😁😂", token);

		
	}, []);

	console.log(user);
	console.log(token);
	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />} {/* Spotify Logo */}
			{/* Login With Spotify button */}
		</div>
	);
}

export default App;
