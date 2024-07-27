import styles from '../Intro/intro.module.scss';

export default function Intro({ title, subTitle, image, children }) {
    return (
        <div className={styles.sectionHero} style={image}>
            <div className={`container ${styles.containerSmall}`}>
                <div className={styles.section__head}>
                    <h1 className={styles.section__title}>
                        {title}
                    </h1>

                    <p className={styles.section__subtitle}>
                        {subTitle}
                    </p>

                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}