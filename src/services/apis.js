
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const tasks = {
    CREATE_TASK_API : BASE_URL + "/createTask",
    DELETE_TASK_API : BASE_URL + "/deleteTask",
    UPDATE_TASK_API : BASE_URL + "/updateTask",
    READ_TASK_API : BASE_URL + "/createTask",
}

export const auth = {
    LOGIN_API : BASE_URL + "/login",
    SIGNUP_API : BASE_URL + "/signup",
}