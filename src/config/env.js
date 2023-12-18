import "dotenv/config";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIACLECT, DB_PORT } =
  process.env;

export { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIACLECT, DB_PORT };
