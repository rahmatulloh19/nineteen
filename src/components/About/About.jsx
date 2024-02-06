import { Link } from "react-router-dom";
import "./about.less";

export const About = ({
	img,
	imgRetina,
	imgTablet,
	imgTabletRetina,
	imgDesktop,
	imgDesktopRetina,
	desc,
}) => {
	return (
		<section className="site-main__about about">
			<div className="container">
				<div className="about__inner">
					<picture className="about__picture">
						{/* Retina images */}
						{/* Images after 1024px */}
						<source
							media="(min-width: 1024px)"
							srcset={`${imgDesktop} 1x, ${imgDesktopRetina} 2x`}
							width={533}
							height={592}
						/>

						{/* Images after 768px */}
						<source
							media="(min-width: 768px)"
							srcset={`${imgTablet} 1x, ${imgTabletRetina} @2x`}
							width={281}
							height={600}
						/>
						{/* Images after 320px */}
						<img
							className="about__img"
							src={img}
							width="311"
							height="346"
							alt="My picture"
							srcSet={`${img}  1x, ${imgRetina}  2x`}></img>
					</picture>
					<div className="about__content">
						<h2 className="about__title">About Me</h2>
						<p className="about__desc">{desc}</p>
						<Link className="about__link" to="/portfolio">
							GO TO PORTFOLIO
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
