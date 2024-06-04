import { sendMail } from "./nodemailer.js";
import { redis } from "../redis/redis.js";
import { UserData } from "../models/userTrigger.js";

export const trigger = async () => {
  try {
    // Retrieve user data
    const users = await UserData.find();

    // Retrieve coin data from Redis
    const redisdata = await redis.hgetall("coins");

    // Convert Redis data to a usable format (string to number)
    const coinsData = {};
    for (const key in redisdata) {
      if (Object.hasOwnProperty.call(redisdata, key)) {
        coinsData[key] = Number(redisdata[key]); // Convert string to number
      }
    }
    console.log(coinsData);

    // Iterate over each user
    await Promise.allSettled(
      users.map(async (user) => {
        const email = user.email;
        await Promise.allSettled(
          user.coins.forEach(async (userCoin) => {
            const currentPrice = coinsData[userCoin.name];
            if (currentPrice && userCoin.price < currentPrice) {
              // Send email if user's threshold is below the current price
              await sendMail(email, userCoin);
            }
          })
        );
      })
    );
  } catch (error) {
    console.error("Error in trigger function:", error);
  }
  console.log("Successfully sent mails");
};
