import SidebarOption from "./SidebarOption";
import "./styles.css";
import { FaBook, FaHome, FaMusic, FaSearch, FaUser } from "react-icons/fa";
import { useDataLayerValue } from "../../StateProvider/DataLayer";

const Sidebar = () => {

    const [{playlists}, dispatch] = useDataLayerValue()

	return (
		<div className="sidebar">
			<img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt=""
				className="sidebar__logo"
			/>

			<SidebarOption Icon={FaHome} title="Home" />
			<SidebarOption Icon={FaSearch} title="Search" />
			<SidebarOption Icon={FaMusic} title="Your Library" />

			<br />

			<strong className="sidebar__title">PlayList</strong>
			<hr />
            {
                playlists?.items?.map(playlist => {
                    <SidebarOption title={playlist.name} />
                })
            }
            </div>
	);
};

export default Sidebar;
