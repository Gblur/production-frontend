import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainProps {

}

const Main: FC<MainProps> = () => {
    const { t } = useTranslation('main');
    return (
        <h1>{t('Главная страница')}</h1>
    );
};

export default Main;
