declare const __API_URL__: string;
declare const __PRODUCTION__: boolean;
declare const __MANIFEST_PATH__: string;

export const environment = {
    production: __PRODUCTION__,
    apiUrl: __API_URL__,
    manifestPath: __MANIFEST_PATH__
};