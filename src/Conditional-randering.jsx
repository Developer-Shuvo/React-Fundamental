//Conditional Rendering in React ----system 1
export default function ConditionalRendering({ task, isDone }) {
    if (isDone === "YES") {
        return <li>Task is: {isDone}</li>;
    } else {
        return <li>Task is: {task}</li>;
    }
}



//Conditional Rendering in React ----system 2
export default function ConditionalRendering({ task, isDone }) {

    if (isDone === "YES") {
        return <li> Task is : {isDone}</li>;
    } else {
        return <li> Work on : {task}</li>;
    }

}
