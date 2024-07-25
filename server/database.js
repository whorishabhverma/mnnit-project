import pg from "pg";
// Function to connect to the PostgreSQL database
const { Pool } = pg;

const db = new Pool({
  connectionString:
    "postgres://default:BdUpAXQ51ROM@ep-crimson-paper-a4uc4rsg.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

db.connect()
  .then(() => {
    console.log("Connected to the PostgreSQL database");
  })
  .catch((error) => {
    console.error("Error connecting to the PostgreSQL database:", error);
  });

export default db;
