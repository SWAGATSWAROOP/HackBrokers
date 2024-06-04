import { bulkUpdate } from "./bulkupdate.js";
import { redis } from "../redis/redis.js";

export const datafetch = async () => {
  try {
    const res = await fetch(
      new Request("https://api.livecoinwatch.com/coins/list"),
      {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "344fa7d6-b410-4a2b-93da-e44129ace034",
        }),
        body: JSON.stringify({
          currency: "USD",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 5,
          meta: false,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const pipeline = redis.pipeline();
    data.forEach(({ name, rate }) => {
      pipeline.hset("coins", name, rate);
    });
    try {
      await pipeline.exec();
      console.log("Coins set successfully");
    } catch (error) {
      console.error("Error setting coins:", error);
    }
    await bulkUpdate(data);
    console.log("Successfully Updated Data");
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
