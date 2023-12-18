import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMultipart from "fastify-multipart";
import Routes from "./routes/routes.js";
import { DB_PORT } from "./config/env.js";
const app = fastify({ logger: true });

app.register(fastifyMultipart);
app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"],
});

app.register(Routes);

app.listen({ port: DB_PORT });
