class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: ['Task-1', 'Task-1', 'Task-1']
        }
    }


    render(){
        return(
            <div className="container">
                <Header title="Tasks" action="To-DO" />
                <Form />
            </div>
        );
    }

}

/* Header Component */
class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div className="bg-light mt-2 text-center">
            <h1 className="display-4">
                <i className="fas fa-tasks text-info mr-2" />
                {this.props.title}
                <span className="text-info ml-2">{this.props.action}</span>
            </h1>
        </div>
    );
}
}

/* Form Component */
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log(this.state.tasks);
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="input" className="lead text-light">Task</label>
                    <input type="text" className="form-control" placeholder="Enter Task..."/>
                    <button type="submit" className="btn btn-success btn-block my-2">Add Task</button>
                    <ul className="list-group">
                        {
                            this.state.tasks.map(t => (
                                <Tasks task={t} />
                            ))
                        }
                    </ul>

                </div>
            </form>
        );
    }
}

/* Tasks Component */
class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <li className="list-group-item lead">{this.props.task} <button className="btn btn-danger btn-sm float-right">X</button></li>
            </div>
        );
    }
}




ReactDOM.render(<App />, document.getElementById('root'));