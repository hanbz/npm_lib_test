import axios from "axios";
import { AuthorizedThirdParty } from "./interfaces/authorized.interface";
import FormData from "form-data";

export class Instagram {
    async codeToAccessToken(code: string, authorizedInfo: AuthorizedThirdParty) {
        const form = new FormData();

        form.append('client_id', authorizedInfo.clientId);
        form.append('client_secret', authorizedInfo.clientSecret);
        form.append('grant_type', 'authorization_code');
        form.append('redirect_uri', authorizedInfo.redirectUrl);
        form.append('code', code);

        const user_profile_withs_short_token = await axios.post('https://api.instagram.com/oauth/access_token', form)
            .then((response) => {
                return response.data;
            })

        const user_accesstoken = await axios.get('https://graph.instagram.com/access_token', {
            params: {
                grant_type: 'ig_exchange_token',
                client_secret: authorizedInfo.clientSecret,
                access_token: user_profile_withs_short_token.access_token
            }
        }).then((response) => {
            return response.data
        })

        return {
            userId: user_profile_withs_short_token.user_id,
            accessToken: user_accesstoken.access_token
        }
    }

    async getUserPostByAccessToken(userId: string, accessToken: string) {
        await axios.get('https://graph.instagram.com/v17.0/' + userId + '/media', {
            params: {
                access_token: accessToken,
                fields: "caption,media_type,media_url,permalink,timestamp,username"
            }
        }).then((response) => {
            return response.data
        })
    }
}