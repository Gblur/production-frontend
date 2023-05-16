import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {

}

const About: FC<AboutProps> = () => {
    const { t } = useTranslation('about');
    return (
        <h1>{t('О сайте')}</h1>
    );
};

export default About;
