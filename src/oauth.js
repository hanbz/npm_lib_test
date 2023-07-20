"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedirectUrl = void 0;
function getRedirectUrl(oauthInfo) {
    const url = new URL('oauth/authorize', 'https://api.instagram.com');
    url.searchParams.append('client_id', oauthInfo.clientId);
    url.searchParams.append('redirect_uri', oauthInfo.redirectUrl);
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('scope', oauthInfo.scope);
    return url.toString();
}
exports.getRedirectUrl = getRedirectUrl;
;
