import "./hero.less";
import { homeImages } from "../../assets/images";

export const Hero = ({
	img,
	imgRetina,
	title,
	imgTablet,
	imgTabletRetina,
	imgDesktop,
	imgDesktopRetina,
}) => {
	return (
		<section className="site-main__hero hero">
			<div className="container">
				<div className="hero__inner">
					<picture className="hero__picture">
						{/* Retina images */}
						{/* Images after 1024px */}
						<source
							srcSet={`${imgDesktop} 1x, ${imgDesktopRetina} 2x`}
							media="(min-width: 1024px)"
							width={1110}
							height={600}
						/>

						{/* Images after 768px */}
						<source
							srcSet={`${imgTablet} 1x, ${imgTabletRetina} 2x`}
							media="(min-width: 768px)"
							width={688}
							height={600}
						/>

						{/* Images after 320px */}
						<img
							className="hero__img"
							src={img}
							width={311}
							height={271}
							alt="Hero image"
							srcSet={`${img} 1x, ${imgRetina} 2x`}
						/>
					</picture>
					<div className="hero__content">
						<h1 className="hero__title">{title}</h1>
						<a className="hero__link" href="#about">
							{homeImages.HomeHeroLinkImg()}
							ABOUT ME
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
