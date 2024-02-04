import { Link } from "react-router-dom";
import "./footer.less";
import { footerImages, globalImages } from "../../images";

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="site-footer__inner">
					<Link className="site-footer__logo" to="/">
						<picture>
							<source
								srcSet={footerImages.logoWhite}
								width={194}
								height={50}
								media="(min-width: 1080px)"
							/>
							<img
								src={footerImages.logoMobileWhite}
								width={135}
								height={35}
								alt="Абстрактное изображение"
							/>
						</picture>
					</Link>
					<ul className="site-footer__list">
						<li className="site-footer__item">
							<Link className="site-footer__link" to="/">
								HOME
							</Link>
						</li>
						<li className="site-footer__item">
							<Link className="site-footer__link" to="portfolio">
								PORTFOLIO
							</Link>
						</li>
						<li className="site-footer__item">
							<Link className="site-footer__link" to="contact">
								CONTACT ME
							</Link>
						</li>
					</ul>
					<ul className="site-footer__social-list">
						<li className="site-footer__social-item">
							<a className="site-footer__social-link" href="/" target="blank">
								<img
									className="site-footer__social-img"
									src={globalImages.github}
									width={24}
									height={24}
									alt="Github's icon"
								/>
							</a>
						</li>
						<li className="site-footer__social-item">
							<a className="site-footer__social-link" href="/" target="blank">
								<img
									className="site-footer__social-img"
									src={globalImages.telegram}
									width={24}
									height={24}
									alt="Telegram's icon"
								/>
							</a>
						</li>
						<li className="site-footer__social-item">
							<a className="site-footer__social-link" href="/" target="blank">
								<img
									className="site-footer__social-img"
									src={globalImages.linkedin}
									width={24}
									height={24}
									alt="LinkedIn's icon"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
