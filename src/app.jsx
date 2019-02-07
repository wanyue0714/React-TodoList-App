class Todo extends React.Component {
	render() {
		return <div className = "todo">
					<span>
						<input type = "checkbox" /> {this.props.name}
					</span>
				</div>;
	}
}

ReactDOM.render(
	<Todo name = "event 1" />,
	document.getElementById('root'));