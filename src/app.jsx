class Todo extends React.Component {

	constructor(props){
		super(props);

		this.state = { done: props.done, 
					   text: props.text 
					 };

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick(event){
		this.setState(
			state => ({done: !state.done}),
			function(event){
				this.handleSubmit(event)
			}
		);
		
	}

	handleChange(event){
		let text = event.target.value;
		console.log(text)
		this.setState(state => ({text:text})
		);
	}

	handleSubmit(event){
		console.log("submit");
		this.setState(state => ({})
		);
	}

	render() {

		return <div className = "todo">
					<span>
						<input type = "checkbox" checked = {this.state.done} onClick = {this.handleClick} />
						<input type = "text" value = {this.state.text} onChange = {this.handleChange} onBlur = {this.handleSubmit} placeholder="Enter your Todo here"/>
					</span>
				</div>;
	}
}

class TodoList extends React.Component {
	constructor(props){
		super(props);

		this.state = { 
						todos: [ 
								{ _id: 'a', text: "Item1", done: true},
								{ _id: 'b', text: "Item2", done: false},
								{ _id: 'c', text: "Item3", done: false},
								{ _id: 'd', text: "Item4", done: false}
							   ]
					 };
		this.newTodo = this.newTodo.bind(this)

	}

	newTodo(event){
		event.preventDefault();
		todos = this.state.todos;
		todos.push({ _id: ""});
		this.setState(state => ({
			todos: todos
		}));
	}

	render(){
		const todoList = this.state.todos.map((todo) => 
			<Todo key={todo._id.toString()} text={todo.text} done={todo.done} />
		);

		return <React.Fragment>
			   	<h1>React Todo APP</h1>
			   	{todoList}
			   	<a href = "#" onClick={this.newTodo}>New Todo</a>
			   </React.Fragment>
	}
}

ReactDOM.render(
	<TodoList />,
	document.getElementById('root')
);
