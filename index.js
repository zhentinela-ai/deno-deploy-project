import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const tasks = [];

const tasksRoutes = new Router()
  .get("/", (ctx) => {
    ctx.response.body = "Welcome to API";
  })
  .get("/tasks", (ctx) => {
    ctx.response.body = tasks;
  })
  .post("/tasks", (ctx) => {
    ctx.response.body = "creating task";
  });

app.use(tasksRoutes.routes());
await app.listen({ port: 8000 });
