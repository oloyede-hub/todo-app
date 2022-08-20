import Todoitem from "./TodoItem"
import Project from "./Project";

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push( new Project("Inbox"))
        this.projects.push( new Project("Today"))
        this.projects.push( new Project("This Week"))
    }

    setProjects(projects) {
        this.projects = projects;
    }
    getProjects() {
       return this.projects
    }

    getProject(projectTitle) {
        this.projects.find(project => project.getTitle() === projectTitle)
    }
    contain(projecTitle) {
        this.projects.some(project => project.getTitle() === projecTitle)
    }

    addProject(newProject) {
        if(this.projects.find(project => project.getTitle()  === newProject.title)) return;
        this.projects.push(newProject);
    }

}