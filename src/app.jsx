class Todo extends React.Component {

	constructor(props){
		super(props);
		this.state = {  done: this.props.done == "true" && props.done,
						text: props.text };
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event){
		this.setState( state => { done: !state.done} );
	}

	render() {

		return <div className = "todo">
					<span>
						<input type = "checkbox" checked = {this.props.done} onClick = {this.handleClick} />
						<input type = "text" value = {this.props.text}/>
					</span>
				</div>;
	}
}

ReactDOM.render(
	<Todo text = "event 1" done = "false" />,
	document.getElementById('root'));