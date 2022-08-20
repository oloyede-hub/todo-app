import Todoitem from "./TodoItem";

export default class Project {

    constructor(title) {
        this.title = title;
        this.tasks = [];
    }


    setTitle(title) {
        this.title = title
    }


    getTitle() {
        return this.title;
    }


    setTasks(tasks) {
        this.tasks = tasks
    }


    getTasks() {
        return this.tasks
    }


    getTask(taskTitle) {
        return this.tasks.find(task => task.getTitle() === taskTitle);
    }


    addNewTask(newTask) {
        if (this.tasks.find(task => task.getTitle() === newTask.title)) return;
        this.tasks.push(newTask);
    }


    deleteTask(taskTitle) {
        this.tasks.filter(task => task.title !== taskTitle);
    }


}