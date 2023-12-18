import { Sequelize } from "sequelize";

import {
  DB_DATABASE,
  DB_DIACLECT,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
} from "../config/env.js";

const connectionsTaskDb = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIACLECT,
});

export default connectionsTaskDb;
