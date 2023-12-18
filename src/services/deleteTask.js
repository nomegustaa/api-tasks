import connectionsTaskDb from "../connections/connectionsDb.js";

const deleteTask = (id) => {
  try {
    const taskDelete = connectionsTaskDb.query(`
      DELETE task WHERE id = '${id}'
    `);
    return taskDelete;
  } catch (e) {
    console.log(e, "error delete db");
  }
};

export default { deleteTask };
