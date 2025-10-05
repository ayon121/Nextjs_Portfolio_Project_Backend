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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_service_1 = require("./user.service");
const getMe = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedtoken = req.user;
    const result = yield user_service_1.UserServices.getMe(decodedtoken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Your profile Retrieved Successfully",
        data: result.data
    });
}));
exports.UserControllers = {
    getMe,
};
