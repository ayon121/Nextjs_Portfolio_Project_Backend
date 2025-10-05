"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const AppError_1 = __importDefault(require("../../ErrorHelpers/AppError"));
const setcookie_1 = require("../../utils/setcookie");
const usertoken_1 = require("../../utils/usertoken");
const passport_1 = __importDefault(require("passport"));
const creadentialLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // from passport login system
        passport_1.default.authenticate("local", (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(new AppError_1.default(401, info.message));
            }
            const userTokens = (0, usertoken_1.CreateUserToken)(user);
            const _a = user.toObject(), { password: pass } = _a, rest = __rest(_a, ["password"]);
            (0, setcookie_1.setAuthCookie)(res, userTokens);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 201,
                message: "User Logged In Successfully",
                data: {
                    accesstoken: userTokens.accesstoken,
                    refreshtoken: userTokens.refreshtoken,
                    user: rest
                }
            });
        }))(req, res, next);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const getNewAccessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.cookies.refreshtoken;
        if (!refreshToken) {
            throw new AppError_1.default(500, "No Refresh Token");
        }
        const tokenInfo = yield auth_service_1.AuthServices.getNewAccessToken(refreshToken);
        (0, setcookie_1.setAuthCookie)(res, tokenInfo);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 201,
            message: "New Access Token Retrive Successfully",
            data: tokenInfo
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("accesstoken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        res.clearCookie("refreshtoken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 201,
            message: "User Logged out Successfully",
            data: null
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.AuthControllers = {
    creadentialLogin,
    getNewAccessToken,
    logout,
};
