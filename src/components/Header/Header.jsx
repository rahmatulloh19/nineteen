import { Link } from "react-router-dom";
import { headerImages } from "../../images";
import "./header.less";

export const Header = () => {
	console.log(headerImages.logo);

	return (
		<header className="site-header">
			<div className="container">
				<Link>
					<picture>
						<source srcSet={headerImages.logo} media="(min-width: 768px)" />
						<img src={headerImages.logoMobile} alt="Абстрактное изображение" />
					</picture>
				</Link>
			</div>
		</header>
	);
};
