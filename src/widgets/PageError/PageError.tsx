import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так.')}</h1>
            <Button onClick={reloadPage} theme={ThemeButton.CLEAR}>{t('Обновить страницу')}</Button>
        </div>
    );
};
