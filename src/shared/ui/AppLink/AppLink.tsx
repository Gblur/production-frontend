import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
