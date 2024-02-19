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
import aboutImage from "./me.png";
import aboutImage2x from "./me@2x.png";
import aboutTabletImage from "./metablet.png";
import aboutTabletImage2x from "./metablet@2x.png";
import aboutDesktopImage from "./medesktop.png";
import aboutDesktopImage2x from "./medesktop@2x.png";
import { Manage } from "./Manage";
import { Bookmark } from "./Bookmark";
import { Insure } from "./Insure";

export { Manage, Bookmark, Insure };

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

export const aboutImages = {
	aboutImage: aboutImage,
	aboutImage2x: aboutImage2x,
	aboutTabletImage: aboutTabletImage,
	aboutTabletImage2x: aboutTabletImage2x,
	aboutDesktopImage: aboutDesktopImage,
	aboutDesktopImage2x: aboutDesktopImage2x,
};
