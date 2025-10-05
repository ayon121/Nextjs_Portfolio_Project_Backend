
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from "jsonwebtoken";
import { UserServices } from "./user.service";






const getMe = catchAsync(async (req: Request, res: Response) => {
    const decodedtoken = req.user as JwtPayload
    const result = await UserServices.getMe(decodedtoken.userId);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Your profile Retrieved Successfully",
        data: result.data
    })
})










export const UserControllers = {
    getMe,
}
