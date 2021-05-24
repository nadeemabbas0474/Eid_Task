let input = prompt('what would do you like to do?')
const todos = ['Muhammad Irfan', 'Zahid Hussain', 'Shahzad Ali','Muhammad Jawad'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('Members of this company')
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, who is the new member?');
        todos.push(newTodo);
        console.log(`${newTodo} added to new list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index no to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do again?')
}
console.log('OK QUIT THE APP!')