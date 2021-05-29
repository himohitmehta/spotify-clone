import { Avatar } from "@material-ui/core";
import { FaSearchLocation } from "react-icons/fa";
import { useDataLayerValue } from "../../../StateProvider/DataLayer";
import "./styles.css";

const Header = () => {
    const [{user}, dispatch ] = useDataLayerValue()

	return (
		<div className="header">
			<div className="header__left">
				<FaSearchLocation />
				<input />
			</div>

			<div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="User" />
                <h4>{user?.display_name}
                    </h4>

            </div>
		</div>
	);
};

export default Header;
