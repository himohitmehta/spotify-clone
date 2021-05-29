import "./styles.css";
import {
	MdPlayCircleOutline,
	MdPlaylistPlay,
	MdRepeat,
	MdShuffle,
	MdSkipNext,
	MdSkipPrevious,
	MdVolumeDown,
} from "react-icons/all";
import { Grid, Slider } from "@material-ui/core";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src="https://source.unsplash.com/random"
				/>
				<div className="footer__songInfo">
					<h4>song name</h4>
					<p>artist</p>
				</div>
			</div>

			<div className="footer__center">
				<MdShuffle className="footer__green" />
				<MdSkipPrevious className="footer__icon" />
				<MdPlayCircleOutline fontSize="large" className="footer__" />
				<MdSkipNext className="footer__icon" />
				<MdRepeat className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<MdPlaylistPlay />
					</Grid>
					<Grid item>
						<MdVolumeDown />
					</Grid>
					<Grid item xs>
						<Slider style={{ color: "green" }} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
