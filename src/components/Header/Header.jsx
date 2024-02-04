import { Link, NavLink } from "react-router-dom";
import { headerImages } from "../../images";
import "./header.less";

export const Header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header__inner">
					<Link className="site-header__logo" to="/">
						<picture>
							<source
								srcSet={headerImages.logo}
								width={194}
								height={50}
								media="(min-width: 1080px)"
							/>
							<img
								src={headerImages.logoMobile}
								width={135}
								height={35}
								alt="Абстрактное изображение"
							/>
						</picture>
					</Link>

					<button className="site-header__menu-btn" type="button">
						<img src={headerImages.hamburgerMenu} width={24} height={13} alt="Hamburger menu" />
					</button>

					<nav className="site-header__nav">
						<ul className="site-header__list">
							<li className="site-header__item">
								<NavLink
									className={({ isActive }) =>
										[isActive ? "site-header__link-active" : "", "site-header__link"].join(" ")
									}
									to="/">
									HOME
								</NavLink>
							</li>
							<li className="site-header__item">
								<NavLink
									className={({ isActive }) =>
										[isActive ? "site-header__link-active" : "", "site-header__link"].join(" ")
									}
									to="/portfolio">
									PORTFOLIO
								</NavLink>
							</li>
							<li className="site-header__item">
								<NavLink
									className={({ isActive }) =>
										[isActive ? "site-header__link-active" : "", "site-header__link"].join(" ")
									}
									to="/contact">
									CONTACT ME
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
