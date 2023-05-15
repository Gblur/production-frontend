import classNames from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';


import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>

            <div className={styles.links}>
                <AppLink to="/" className={styles.mainLink}>{t("Главная страница")}</AppLink>
                <AppLink to="/about">{t("О сайте")}</AppLink>
            </div>
        </div>
    );
}
