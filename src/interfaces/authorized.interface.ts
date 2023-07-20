export interface AuthorizedThirdParty {
    clientId: string;
    clientSecret: string;
    redirectUrl: string;
    scope: string;
    platform: string;
}