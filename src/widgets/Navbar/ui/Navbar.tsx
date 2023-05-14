import classNames from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';


import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>

            <div className={styles.links}>
                <AppLink to="/" className={styles.mainLink}>HOME</AppLink>
                <AppLink to="/about">ABOUT ME</AppLink>
            </div>
        </div>
    );
}
