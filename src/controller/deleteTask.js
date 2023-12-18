import serviceDeleteTask from "../services/deleteTask.js";
import serviceGetTaskById from "../services/getTaskById.js";

const deleteTask = async (req, reply) => {
  try {
    const { id } = req.params;

    if (!id) {
      reply.status(400).send({ message: "One or more missing are parameters" });
    }

    const taskExists = await serviceGetTaskById.getTaskById(id);

    if (taskExists.length === 0) {
      return reply.status(404).send({ message: "Task not found" });
    }

    await serviceDeleteTask.deleteTask(id);
    reply.status(200).send({ message: "task deleted" });
  } catch (e) {
    console.log(e, "error delete tasks in controller");
  }
};

export default { deleteTask };
