import { Projects } from "./Projects";
export let projects: Projects[] = [
  new Projects(
    "Todo list",
    "School",
    "https://i.ibb.co/3fHzRRC/todo-mobile.png",
    "https://i.ibb.co/xHSDxfx/todo-desktop.png",
    `This project is the outcome of an assignment in the course, "Introduction to JavaScript". Creating a To-do list that allows the user to add new tasks to their lists, which are stored in their local storage. The user can mark tasks as done, remove them or sort them, as well as putting the application into dark-mode.`,
    "Link to project here",
    "https://github.com/adamovd/todo_list.git",
    "https://i.ibb.co/zN2hDQj/blob-haikei.png"
  ),
  new Projects(
    "Galaxy Movies",
    "School",
    "https://i.ibb.co/JjyJDdr/movies-mobile.png",
    "https://i.ibb.co/qpRZkwV/movies-desktop.png",
    "Description of project",
    "Link to project",
    "https://github.com/adamovd/movie_api.git",
    "https://i.ibb.co/5xVgq4b/blob-haikei-1.png"
  ),
  new Projects(
    "Greenwashing",
    "Private",
    "mobile",
    "ImageURL",
    "Description of project",
    "Link to project",
    "https://github.com/adamovd/greenwashing.git",
    "https://i.ibb.co/RTDVXyr/blob-haikei-2.png"
  ),
];
