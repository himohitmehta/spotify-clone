import { MdFavorite, MdMoreHoriz, MdPlayCircleFilled } from "react-icons/md";
import { useDataLayerValue } from "../../StateProvider/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import "./styles.css";

const Body = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="" />

				<div className="body__infoText">
					<strong>Playlist</strong>
					<h2>Discover weekly</h2>
					<p>{discover_weekly?.description} </p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<MdPlayCircleFilled
											className="body__shuffle"
					/>
					<MdFavorite fontSize="large" />
					<MdMoreHoriz  />
				</div>
				{/*  */}

				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
