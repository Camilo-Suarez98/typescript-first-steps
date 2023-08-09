"use strict";
let list = [
    { id: 1, title: 'Completar taller de TypeScript', completed: true },
    { id: 2, title: 'Estudiar programación funcional', completed: false },
    { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
    { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
    { id: 5, title: 'Resolver ejercicios de TypeScript', completed: true },
    { id: 6, title: 'Hacer ejercicio', completed: true },
    { id: 7, title: 'Comprar víveres', completed: false },
    { id: 8, title: 'Llamar al médico', completed: false },
    { id: 9, title: 'Limpiar la casa', completed: true },
    { id: 10, title: 'Actualizar el CV', completed: false }
];
const addTask = (taskList, newTask) => {
    return [...taskList, newTask];
};
const newTaskToTheList = {
    id: 11,
    title: 'Leer',
    completed: false
};
const completedTask = (taskList, id) => {
    taskList.find(task => task.id === id ? task.completed = true : task.completed = false);
    return [...taskList];
};
const filterTasks = (taskList, filterTask) => {
    const taskFiltered = taskList.filter(task => task.completed === filterTask ? task : null);
    return taskFiltered;
};
const printTaskList = (taskList) => {
    const titleAndStateTask = taskList.map(task => {
        return ({
            title: task.title,
            completed: task.completed,
        });
    });
    return titleAndStateTask;
};
const runApp = () => {
    const newListOfTasks = addTask(list, newTaskToTheList);
    const tasksCompleted = completedTask(list, 2);
    const completedTasks = filterTasks(list, true);
    return newListOfTasks || tasksCompleted || completedTasks;
};
console.log(runApp());
