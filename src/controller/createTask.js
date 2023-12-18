import ServiceCreateTask from "../services/createTask.js";

const createTask = async (req, reply) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      reply.status(400).send({ message: "One or more missing are parameters" });
    }

    await ServiceCreateTask.createTask(title, description);
    reply.status(201).send({ message: "task create" });
  } catch (e) {
    console.log(e, "error createTask in controller");
  }
};

export default { createTask };
