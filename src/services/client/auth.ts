import jwt from "jsonwebtoken";

import UnauthorizedError from "@/errors/Unauthorized";
import User from "@/entities/User";
import  client  from "@/redisClient";

export async function signIn(email: string, password: string) {
  const user = await User.findByEmailAndPassword(email, password);

  if (!user) {
    throw new UnauthorizedError();
  }

  const token = jwt.sign({
    userId: user.id
  }, process.env.JWT_SECRET);

  client.set(token, `${user.id}` );

  return {
    user: {
      id: user.id,
      email: user.email,
      picture: user.pictureUrl
    },
    token
  };
}
