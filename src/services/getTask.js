import connectionsTaskDb from "../connections/connectionsDb.js";

const getTask = async () => {
  try {
    const [tasks] = await connectionsTaskDb.query(`
    SELECT * FROM task
  `);
    return tasks;
  } catch (e) {
    console.log(e, "error get db");
  }
};

export default { getTask };
