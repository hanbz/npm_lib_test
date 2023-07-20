import { Instagram } from "tellit-test-nestjs/src/instagram";

const code = 'AQBL3VPwJJ7VMOmfkJ-c6s3OTRBgL4CRSJIGBjWCPwTWPvMIv_6rA1HYVUJBbtA1VkjlaWMiZ-Udi9ZdIEPDGqefKE8lKVZnzfLG5acrDJztQWGPj_ArOlQUBrYmv8tmlJq0LaVvfUFbncn4tV4z5g9vlikwoRn4vLHvoZEXlPKr8HXmv1I6HAjAffOdQvD3ILUyAHBV8UNuKWPnss07zIBKcMwsYUCCC_0YR3ExViqblg';

const oauthInfo = {
    clientId: client_id,
    clientSecret: client_secret,
    redirectUrl: callback_url,
    scope: 'user_profile,user_media,instagram_graph_user_media,instagram_graph_user_profile',
    platform: 'instagram'
}

const ig = new Instagram();
const token = ig.codeToAccessToken(code, oauthInfo);