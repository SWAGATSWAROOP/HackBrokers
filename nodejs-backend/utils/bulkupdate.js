import { CoinsData } from "../models/coindataSchema.js";
import { trigger } from "./trigger.js";

export const bulkUpdate = async (data) => {
  const bulkOps = await Promise.all(
    data.map(async (element) => {
      const filter = { symbol: element.code };
      const update = { $set: { price: element.rate } };

      return {
        updateOne: {
          filter: filter,
          update: update,
          upsert: true,
        },
      };
    })
  );

  await CoinsData.bulkWrite(bulkOps);
  console.log("Bulk update completed");
  await trigger();
};
