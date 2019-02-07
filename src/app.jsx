class Todo extends React.Component {

	constructor(props){
		super(props);

		this.state = { done: props.done, text: props.text };

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
		this.setState(state => {});
	}

	render() {

		return <div className = "todo">
					<span>
						<input type = "checkbox" checked = {this.props.done} onClick = {this.handleClick} />
						<input type = "text" value = {this.props.text} onChange = {this.handleChange} onBlur = {this.handleSubmit} placeholder="Enter your Todo here"/>
					</span>
				</div>;
	}
}

ReactDOM.render(
	<Todo />,
	document.getElementById('root'));