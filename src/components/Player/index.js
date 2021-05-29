import Body from "../Body";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import "./styles.css";

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				{/* Sidebar */}
				<Sidebar />
				<Body spotify={spotify} />

				{/* Body */}
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Player;
