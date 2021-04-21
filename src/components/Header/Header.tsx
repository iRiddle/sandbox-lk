import React from "react";
import './Header.sass';

import Logo from "../Logo";
import OfficeInfo from "../OfficeInfo";
import ProfileStatus from '../ProfileStatusBar';
import WidthContainer from "../WidthContainer";
import SearchInput from "../SearchInput";
import CityBar from "../CityBar";
import TabBar from '../TabBar';

const InfoBar = () => (
	<div className="info-bar">
					<Logo/>
					<div className="info-bar__wrapper info-bar__wrapper--flex-end info-bar__wrapper--vertical-centered">
						<OfficeInfo/>
						<ProfileStatus/>
						<SearchInput/>
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
