import connectionsTaskDb from "../connections/connectionsDb.js";

const createTask = async (title, description) => {
  try {
    const newTask = await connectionsTaskDb.query(`
    INSERT INTO task 
      (title, description, completed_at, create_at, update_at) 
      VALUES ('${title}', '${description}', null, GETDATE(), null)
  `);
    return newTask;
  } catch (e) {
    console.log(e, "error insert db");
  }
};

export default { createTask };
