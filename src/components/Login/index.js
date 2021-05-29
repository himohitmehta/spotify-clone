import { loginUrl } from "../../spotify/spotify";
import "./styles.css";

const Login = () => {
	return (
		<div className="login">
			{/* Logo */}
			Login Page
				<img
					src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
					alt=""
					className="logo"
				/>

			{/* Login Page */}
			<a href={loginUrl}>Log in With Spotify</a>
		</div>
	);
};

export default Login;
