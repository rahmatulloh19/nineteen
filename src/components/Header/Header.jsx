import { Link, NavLink } from "react-router-dom";
import { headerImages } from "../../assets/images";
import "./header.less";
import { useState } from "react";

export const Header = () => {
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu((prev) => !prev);
	};

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
								media="(min-width: 1024px)"
							/>
							<img
								src={headerImages.logoMobile}
								width={135}
								height={35}
								alt="Абстрактное изображение"
							/>
						</picture>
					</Link>
					<button className="site-header__menu-btn" type="button" onClick={handleClick}>
						<img
							className="site-header__menu-img"
							src={menu ? headerImages.closeMenu : headerImages.hamburgerMenu}
							width={24}
							height={19}
							alt="Hamburger menu"
						/>
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

					{menu && (
						<div className="site-header__menu">
							<ul className="site-header__menu-list">
								<li className="site-header__menu-item">
									<Link className="site-header__menu-link" to="/">
										HOME
									</Link>
								</li>
								<li className="site-header__menu-item">
									<Link className="site-header__menu-link" to="/portfolio">
										PORTFOLIO
									</Link>
								</li>
								<li className="site-header__menu-item">
									<Link className="site-header__menu-link" to="/contact">
										CONTACT ME
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
