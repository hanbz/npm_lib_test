"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oauth_1 = require("./src/oauth");
const instagram_1 = require("./src/instagram");
module.exports = {
    getRedirectUrl: oauth_1.getRedirectUrl,
    Instagram: instagram_1.Instagram
};
