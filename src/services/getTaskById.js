import connectionsTaskDb from "../connections/connectionsDb.js";

const getTaskById = async (id) => {
  try {
    const [taskById] = await connectionsTaskDb.query(`
      SELECT * FROM task WHERE id = '${id}'
    `);
    return taskById;
  } catch (e) {
    console.log(e, "error get by id db");
  }
};

export default { getTaskById };
