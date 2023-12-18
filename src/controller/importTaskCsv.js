import serviceCreateTask from "../services/createTask.js";

const importTaskCsv = async (req, reply) => {
  try {
    const file = await req.file();
    const tasks = [];
    if (!file) {
      return reply.status(400).send({ message: "file not found." });
    }

    const fileBuffer = await file.toBuffer();
    let fileToString = fileBuffer.toString("utf-8");

    const line = fileToString.split("\n");
    line.shift();

    for (const lines of line) {
      const [title, description] = lines.split(",");

      tasks.push(serviceCreateTask.createTask(title, description));
    }

    await Promise.all(tasks);
    reply.status(201).send({ message: "import task success" });
  } catch (e) {
    console.log(e, "error import task in controller");
  }
};

export default { importTaskCsv };
