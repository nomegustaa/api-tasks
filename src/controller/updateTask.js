import serviceUpdateTask from "../services/updateTask.js";
import serviceGetTaskById from "../services/getTaskById.js";

const updateTask = async (req, reply) => {
  try {
    let { newTitle, newDescription } = req.body;
    const { id } = req.params;

    const response = await serviceGetTaskById.getTaskById(id);

    const { title, description } = response[0];

    newTitle = newTitle ? newTitle : title;
    newDescription = newDescription ? newDescription : description;

    await serviceUpdateTask.updateTask(newTitle, newDescription, id);
    reply.status(200).send({ message: "modified task" });
  } catch (e) {
    console.log(e, "error update tasks in controller");
  }
};

export default { updateTask };
