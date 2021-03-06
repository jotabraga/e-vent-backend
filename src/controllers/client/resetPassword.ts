import { Request, Response } from "express";
import * as resetPasswordService from "@/services/client/resetPassword";

export async function sendToken(req: Request, res: Response) {
  const { email }= req.body;
  await resetPasswordService.sendToken(email);
  res.sendStatus(200);
}

export async function verifyTokenValidation(req: Request, res: Response) {
  const { token } = req.params;
  await resetPasswordService.verifyTokenValidation(token);
  res.sendStatus(200);
}

export async function resetPassword(req: Request, res: Response) {
  const { token } = req.params;
  const newPassword = req.body.newPassword as string;
  await resetPasswordService.resetPassword(token, newPassword);
  res.sendStatus(200);
}
