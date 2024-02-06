import { homeImages } from "../../assets/images";
import { Hero } from "../../components";

export const Home = () => {
	return (
		<>
			<Hero
				img={homeImages.heroImage}
				imgRetina={homeImages.heroImage2x}
				imgTablet={homeImages.heroTabletImage}
				imgTabletRetina={homeImages.heroTabletImage2x}
				imgDesktop={homeImages.heroDesktopImage}
				imgDesktopRetina={homeImages.heroDesktopImage2x}
				title={"Hey, I’m Rahmatullah Rakhmanov and I love building beautiful websites"}
			/>
		</>
	);
};
