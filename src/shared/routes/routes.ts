export const youTubeSpaRoutes = {
    root: 'YouTubeSpa',
    login: 'login',
    search: 'search',
} as const;

export type RoutesType = (typeof youTubeSpaRoutes)[keyof typeof youTubeSpaRoutes];