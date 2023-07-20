# Tellit third party login

Use for tellit third party login

## Installation

From github

```bash
npm install git@github.com:Tell-it/third-party-login.git
```

## Usage

Using IG OAuth involves two steps:

1. Obtain the redirect URL by using the `getRedirectUrl` method and then redirect to that URL.
2. Use the code obtained after the redirection to call the `codeToAccessToken` function under Instagram, in order to obtain the long-lived token and userId.

## Example
### getRedirectUrl
```javascript
import { getRedirectUrl } from "third-party-login/src/oauth";

const client_id = '12345674567823423';
const client_secret = 'b77786970z70a98098z0eb7430752cf5';
const callback_url = 'https://2e34-220-135-123-185.ngrok-free.app/instagram/callback';

const url = getRedirectUrl({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUrl: callback_url,
    scope: 'user_profile,user_media,instagram_graph_user_media,instagram_graph_user_profile',
    platform: 'instagram',
})
```

### get long accesss token
```javascript
import { Instagram } from "tellit-test-nestjs/src/instagram";

const code = 'AQBL3VPwJJ7VMOmfkJ-c6s3OTRBgL4CRSJIGBjWCPwTWPvMIv_6rA1HYVUJBbtA1VkjlaWMiZ-Udi9ZdIEPDGqefKE8lKVZnzfLG5acrDJztQWGPj_ArOlQUBrYmv8tmlJq0LaVvfUFbncn4tV4z5g9vlikwoRn4vLHvoZEXlPKr8HXmv1I6HAjAffOdQvD3ILUyAHBV8UNuKWPnss07zIBKcMwsYUCCC_0YR3ExViqblg';
const client_id = '12345674567823423';
const client_secret = 'b77786970z70a98098z0eb7430752cf5';
const callback_url = 'https://2e34-220-135-123-185.ngrok-free.app/instagram/callback';

const oauthInfo = {
    clientId: client_id,
    clientSecret: client_secret,
    redirectUrl: callback_url,
    scope: 'user_profile,user_media,instagram_graph_user_media,instagram_graph_user_profile',
    platform: 'instagram'
}

const ig = new Instagram();
const token = ig.codeToAccessToken(code, oauthInfo);
```

### get user post
```javascript
import { Instagram } from "tellit-test-nestjs/src/instagram";

const ig = new Instagram();
const userPosts = ig.getUserPostsByAccessToken(userId,accesssToken);
```
The posts response will like
```json
{
  "data": [
    {
      "caption": "今天到101跟客戶談專案，第一次在這麼高的樓層談專案，謝謝客戶對我們的信任，再來就是全力以赴執行了。\n\n#精思數位 #101 #網路行銷",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/360790382_243226651827955_8192974241090349872_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VxMdb6GNutEAX_F2QaD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBrU7lQY00_4LJ4R2NqRfCr6kQo_LrxF9hEPGfY3QD4aw&oe=64BDD38B",
      "permalink": "https://www.instagram.com/p/Cut_iGvLvTh/",
      "timestamp": "2023-07-15T12:50:35+0000",
      "username": "hanbingjheng",
      "id": "17944140305561228"
    },
    {
      "caption": "這兩天吵得沸沸揚揚的北科大白飯之亂，目前看起來三方皆輸，\n學校被學生爆料逼迫學生，學生被評論為網路霸凌店家，店家被評論為怕人吃，\n是很典型的公關危機處理失敗的案例。\n\n類似的公關處理其實處理得好的話，不失為一波免費宣傳，炎上商法在過往也捧紅不少KOL，\n在這事件中，以店家為例，第一時間出來澄清之後其實可以見好就收，\n收穫大批流量之後宣布說為了解開與學生的誤會，請當天的學生覺得沒吃飽的再去店裡一次，\n由店家招待，成本算下來三四千塊，收穫許多電視台、社群媒體流量，又可以跟學生和解，\n畢竟開在學校旁邊，學生還是主要客群，跟學生死嗑到底對生意沒有好處，\n\n學校想息事寧人卻沒有注意到現在的社群媒體發達，\n學生的發言已經不是用施壓可以處理的了，大可以採取開放的態度，\n鼓勵學生自主面對並且對自己採取的行動負責任，賺取一波學校的正面聲量。\n\n但整起事件對店家影響會維持最久，再來是學校次之，最後才是學生。\n接下來就看三方如何收尾，一個月後再來追蹤看看後續影響。\n\n#白飯之亂 #北科大 #公關危機",
      "media_type": "IMAGE",
      "media_url": "https://scontent-tpe1-1.cdninstagram.com/v/t51.29350-15/360014193_234090692782621_8257670014201044462_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=YfFMfAwavQ8AX_dGUXH&_nc_ht=scontent-tpe1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCKXgPg6PEcY0XKkg5JraWSzNsuyel0miJ2AhBWmUDnSw&oe=64BF0438",
      "permalink": "https://www.instagram.com/p/Cuj68kORoil/",
      "timestamp": "2023-07-11T14:58:06+0000",
      "username": "hanbingjheng",
      "id": "17979738239352063"
    },
    {
      "caption": "我寫的開源專案安裝數快要4700次了^^\"\n謝謝大家支持\n\nhttps://github.com/hanbz/passport-oauth2-client",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/305501037_652056259678858_3295342788482031065_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uIyfeAWQmmQAX-rOYKK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfABc3VaLANc_qn66ccyOz3U4pZhHU0rizpwKx9XuMVLLQ&oe=64BF3062",
      "permalink": "https://www.instagram.com/p/CiO2eCOvlWa/",
      "timestamp": "2022-09-08T04:18:12+0000",
      "username": "hanbingjheng",
      "id": "17949389000286356"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUmV5V3plbEUzLTcwSngyTFdKZAEF5UGRkOW9ZAemhmTlA1eTNNaXVHSEtudVlxelBnY0VqV0l2OWtycjlIc2xtODd2TVYzNWZAGYlo2QW03VFFPQXFnVmRR",
      "after": "QVFIUmprbU5FLXQ2ODFkc1R1UWdWQWx2dk9ISTJMR1BoblRTT3lxUnpyRXNIenpHTHFTdEdKQkVkWm1feHltaC1lS25ZAYlRuM281ZAEEtZAUw1VmctWnF5SVF3"
    }
  }
}