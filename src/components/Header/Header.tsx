import React from "react";
import './Header.sass';

import Logo from "../Logo";
import OfficeInfo from "../OfficeInfo";
import ProfileStatus from '../ProfileStatusBar';
import WidthContainer from "../../containers/WidthContainer";
import SearhInput from "../SearhInput";
import CityBar from "../CityBar";
import TabBar from '../TabBar';

const InfoBar = () => (
	<div className="info-bar">
					<Logo/>
					<div className="header__wrapper header__wrapper--flex-end header__wrapper--vertical-centered">
						<OfficeInfo/>
						<ProfileStatus/>
						<SearhInput/>
					</div>
			</div>
)


const NavBar = () => (
	<div className="nav-bar">
		<CityBar/>
		<TabBar/>
	</div>
)

const Header = () => (
	<header className="header">
		<WidthContainer>
			<InfoBar/>
			<NavBar/>
		</WidthContainer>
	</header>
);

export default Header;
