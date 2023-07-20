"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instagram = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
class Instagram {
    async codeToAccessToken(code, authorizedInfo) {
        const form = new form_data_1.default();
        form.append('client_id', authorizedInfo.clientId);
        form.append('client_secret', authorizedInfo.clientSecret);
        form.append('grant_type', 'authorization_code');
        form.append('redirect_uri', authorizedInfo.redirectUrl);
        form.append('code', code);
        const user_profile_withs_short_token = await axios_1.default.post('https://api.instagram.com/oauth/access_token', form)
            .then((response) => {
            return response.data;
        });
        const user_accesstoken = await axios_1.default.get('https://graph.instagram.com/access_token', {
            params: {
                grant_type: 'ig_exchange_token',
                client_secret: authorizedInfo.clientSecret,
                access_token: user_profile_withs_short_token.access_token
            }
        }).then((response) => {
            return response.data;
        });
        return {
            userId: user_profile_withs_short_token.user_id,
            accessToken: user_accesstoken.access_token
        };
    }
    async getUserPostByAccessToken(userId, accessToken) {
        await axios_1.default.get('https://graph.instagram.com/v17.0/' + userId + '/media', {
            params: {
                access_token: accessToken,
                fields: "caption,media_type,media_url,permalink,timestamp,username"
            }
        }).then((response) => {
            return response.data;
        });
    }
}
exports.Instagram = Instagram;
