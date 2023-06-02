import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = '*',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath[AppRoutes.NOTFOUND],
        element: <NotFoundPage />,
    },
};
