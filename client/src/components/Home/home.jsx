import Intro from '../Intro/intro';
import bannerImage from '../../../public/images/banner.jpg';

export default function Home() {
    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    return (
        <>
            <Intro
                title='Sell or buy in one place for free'
                subTitle='Sell ​​what you do not need or buy what you need in one place for free'
                image={imageBackground}
            >
            </Intro>
        </>
    );
}