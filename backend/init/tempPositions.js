import PositionsModel from "../model/PositionsModel.js";

const tempPositions = async () => {
    let positions = [
        {
          product: "CNC",
          name: "EVEREADY",
          qty: 2,
          avg: 316.27,
          price: 312.35,
          net: "+0.58%",
          day: "-1.24%",
          isLoss: true,
        },
        {
          product: "CNC",
          name: "JUBLFOOD",
          qty: 1,
          avg: 3124.75,
          price: 3082.65,
          net: "+10.04%",
          day: "-1.35%",
          isLoss: true,
        },
      ];

  try {
    await PositionsModel.insertMany(positions);
    console.log("Temp positions inserted successfully!");
  } catch (err) {
    console.error("Error inserting temp positions:", err);
  }
};

export default tempPositions;