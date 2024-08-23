import type { DB } from "./prisma/types";
import { Kysely } from "kysely"
import { PlanetScaleDialect } from "kysely-planetscale";
import { env } from "./env.mjs";

// export { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";

export * from "./prisma/types";
export * from "./prisma/enums";

// MySQL
export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
      url: env.MYSQL_URL,
    }),
  });

// PostgreSQL
// export const db = new Kysely<DB>({
//   dialect: new PostgresDialect({
//     pool: new Pool({
//       connectionString: process.env.DATABASE_URL,
//     }),
//   }),
// });

