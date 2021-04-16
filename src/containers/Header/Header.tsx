import React from "react";

import Logo from "../../components/Logo";
import OfficeInfo from "../../components/OfficeInfo";
import ProfileStatus from '../ProfileStatusBar';

const Header = () => (
	<header className="header">
		<div className="container">
			<div className="info-bar">
				<Logo description="Комплексный подход 
								к ведению онлайн бизнеса"/>
				<div className="wrapper wrapper--flex-end wrapper--mt-centered">
					<OfficeInfo/>
					<ProfileStatus/>
				</div>
			</div>
			<div className="main-bar">nav-bar</div>
		</div>
	</header>
);

export default Header;
