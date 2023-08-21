type Task = {
  id: number,
  title: string,
  completed: boolean
}

type TaskList = Task[]

let list: TaskList = [
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
]

const addTask = (taskList: TaskList, newTask: Task): TaskList => {
  return [...taskList, newTask]
}

const newTaskToTheList: Task = {
  id: 11,
  title: 'Leer',
  completed: false
}

const completedTask = (taskList: TaskList, id: number): TaskList => {
  taskList.find(task => task.id === id ? task.completed = true : task.completed = false)
  return [...taskList]
}

const filterTasks = (taskList: TaskList, filterTask: boolean): TaskList => {
  const taskFiltered = taskList.filter(task => task.completed === filterTask ? task : {})
  return taskFiltered
}

function printTaskList(taskList: TaskList): void {
  taskList.map(task => {
    console.log(`Title: ${task.title} | Completed: ${task.completed}`)
  })
}

const runApp = (): void => {
  const newListOfTasks = addTask(list, newTaskToTheList);

  const tasksCompleted = completedTask(list, 2);
  console.log(tasksCompleted);
  const completedTasks = filterTasks(list, true);
  printTaskList(completedTasks)
}

runApp()
