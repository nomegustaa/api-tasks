import serviceUpdateStatusTask from "../services/updateStatusTask.js";
import serviceGetTaskById from "../services/getTaskById.js";

const updateStatusTask = async (req, reply) => {
  try {
    const { statusTask } = req.body;
    const { id } = req.params;

    const taskExists = await serviceGetTaskById.getTaskById(id);
    if (taskExists.length === 0) {
      return reply.status(404).send({ message: "Task not found" });
    }

    if (!statusTask) {
      reply.status(400).send({ message: "One or more missing are parameters" });
    }

    await serviceUpdateStatusTask.updateStatusTask(statusTask, id);
    reply.status(200).send({ message: "modified status task" });
  } catch (e) {
    console.log(e, "error update status task in controller");
  }
};

export default { updateStatusTask };
