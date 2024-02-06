import logo from "./logo.svg";
import logoWhite from "./logowhite.svg";
import logoMobile from "./logomobile.svg";
import logoMobileWhite from "./logomobilewhite.svg";
import hamburgerMenu from "./hamburgermenu.svg";
import closeMenu from "./closemenu.svg";
import github from "./github.svg";
import telegram from "./telegram.svg";
import linkedin from "./linkedin.svg";
import heroImage from "./homeheroimg.png";
import heroImage2x from "./homeheroimg@2x.png";
import heroTabletImage from "./homeherotabletimg.png";
import heroTabletImage2x from "./homeherotabletimg@2x.png";
import heroDesktopImage from "./homeherodesktopimg.png";
import heroDesktopImage2x from "./homeherodesktopimg@2x.png";
import { HomeHeroLinkImg } from "./HomeHeroLinkImg";
2;

export const headerImages = {
	logo: logo,
	logoMobile: logoMobile,
	hamburgerMenu: hamburgerMenu,
	closeMenu: closeMenu,
};

export const footerImages = {
	logoWhite: logoWhite,
	logoMobileWhite: logoMobileWhite,
};

export const globalImages = {
	github: github,
	telegram: telegram,
	linkedin: linkedin,
};

export const homeImages = {
	heroImage: heroImage,
	heroImage2x: heroImage2x,
	heroTabletImage: heroTabletImage,
	heroTabletImage2x: heroTabletImage2x,
	heroDesktopImage: heroDesktopImage,
	heroDesktopImage2x: heroDesktopImage2x,
	HomeHeroLinkImg: () => <HomeHeroLinkImg />,
};
