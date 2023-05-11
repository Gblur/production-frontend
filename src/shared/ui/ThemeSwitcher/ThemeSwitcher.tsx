import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import LightIcon from '../../assets/icons/theme-light.svg';

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import { Button } from '..';
import { ThemeButton } from '../Button/Button';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className, ...otherProps } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}

