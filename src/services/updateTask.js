import connectionsTaskDb from "../connections/connectionsDb.js";

const updateTask = (title, description, id) => {
  try {
    const taskUpdate = connectionsTaskDb.query(`
      UPDATE task SET 
        title = '${title}', description = '${description}', update_at = getdate() 
        WHERE id = '${id}'
    `);
    return taskUpdate;
  } catch (e) {
    console.log(e, "error update db");
  }
};

export default { updateTask };
