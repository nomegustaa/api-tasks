import connectionsTaskDb from "../connections/connectionsDb.js";

const updateStatusTask = async (taskStatus, id) => {
  try {
    const updateStatus = connectionsTaskDb.query(`
      UPDATE task SET status_task = '${taskStatus}'
      WHERE id = '${id}'
    `);
    return updateStatus;
  } catch (e) {
    console.log(e, "error update status task db");
  }
};

export default { updateStatusTask };
