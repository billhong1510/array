var todoList = {
    todo:'clone repo for starter code', status: ['started', 'complete']
}
var completedTodos = {}
for (var check in todoList) {
    if (console.log(`${todoList[check]}`) == 'complete') {
         var completedTodos = Object.assign(todoList, completedTodos);
    }
}
let display = ({todo, status}) => console.log(`${todo} ${status}`);
for (var doublecheck in completedTodos) {
    console.log(display(todo))
}