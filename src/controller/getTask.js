import serviceGetTask from "../services/getTask.js";

const getTask = async (req, reply) => {
  try {
    const response = await serviceGetTask.getTask();

    reply.status(200).send(response);
  } catch (e) {
    console.log(e, "error get tasks in controller");
  }
};

export default { getTask };
