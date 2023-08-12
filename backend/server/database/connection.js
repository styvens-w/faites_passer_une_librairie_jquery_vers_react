const {connect} = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://127.0.0.1/WealthHealthHRnet";

module.exports = async () => {
  try {
    await connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
