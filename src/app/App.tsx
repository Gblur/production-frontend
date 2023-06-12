import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import classNames from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
