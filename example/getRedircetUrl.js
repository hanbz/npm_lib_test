import { getRedirectUrl } from "third-party-login/src/oauth";

const client_id = '111111111111';
const client_secret = 'b77786970z70a98098z0eb7430752cf5';
const callback_url = 'https://2e34-220-135-123-185.ngrok-free.app/instagram/callback';

const url = getRedirectUrl({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUrl: callback_url,
    scope: 'user_profile,user_media,instagram_graph_user_media,instagram_graph_user_profile',
    platform: 'instagram',
})