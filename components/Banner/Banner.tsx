import styles from './Banner.module.css';
interface BannerProps {
    title: string;
    children: React.ReactNode;
}

const bannerContainerBaseClassNames = 'relative flex min-h-[8rem] h-[22vh] max-h-[12rem] items-center justify-center w-full overflow-hidden mt-2';
const bannerTitleClassNames = 'px-4 absolute self-center text-center sm:text-5xl text-2xl text-white mx-auto z-10';

export const Banner: React.FC<BannerProps> = ({ title, children }) => {
    return (
        <div className={bannerContainerBaseClassNames}>
            <h2 className={bannerTitleClassNames}>
                {title}
            </h2>
            {children}
        </div>
    )
}

export const CurvedBanner: React.FC<BannerProps> = ({ title, children }) => {
    return (
        <div className={`${bannerContainerBaseClassNames} ${styles["arced-banner-container"]}`}>
            <h2 className={bannerTitleClassNames}>
                {title}
            </h2>
            {children}
        </div>
    )
}
