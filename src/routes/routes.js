import controllerCreateTask from "../controller/createTask.js";
import controllerDeleteTask from "../controller/deleteTask.js";
import controlllerGetTask from "../controller/getTask.js";
import controllerUpdateStatusTask from "../controller/updateStatusTask.js";
import controllerUpdateTask from "../controller/updateTask.js";
import controllerImportTaskCsv from "../controller/importTaskCsv.js";

const Routes = async (fastify, options) => {
  fastify.post("/tasks", controllerCreateTask.createTask);

  fastify.get("/tasks", controlllerGetTask.getTask);

  fastify.put("/tasks/:id", controllerUpdateTask.updateTask);

  fastify.delete("/tasks/:id", controllerDeleteTask.deleteTask);

  fastify.patch(
    "/tasks/:id/status",
    controllerUpdateStatusTask.updateStatusTask
  );

  fastify.post("/tasks/csv", controllerImportTaskCsv.importTaskCsv);
};

export default Routes;
