export const YouTubeSpaRoutes = {
    root: 'YouTubeSpa',
    login: 'login',
    search: 'search',
} as const;

export type RoutesType = (typeof YouTubeSpaRoutes)[keyof typeof YouTubeSpaRoutes];