const Backbone = require('Backbone')
const ReactDOM = require('react-dom')
const React = require('react')



var HomeView = React.createClass({
	getInitialState: function () {

    let startingStates = {
      data: [
				{"id" : "001", "task" : "Grocery Store", "complete" : "false"},
				{"id" : "002", "task" : "Mow Lawn", "complete" : "false"},
        {"id" : "003", "task" : "Study React", "complete" : "false"}
			],
      searchValue: ''
    }
		return startingStates
	},
	newId: function () {
		return Math.floor(Math.random()*900) + 100;
	},


  _newSubmit: function (newTask) {

		// console.log('task', newTask)
		var data = this.state.data;
		var id = this.newId().toString();
		var complete = 'false';
    var task = this.state.searchValue
		data = data.concat([{id, task, complete}]);
		this.setState({data: data});
		// console.log("data", data)
    // console.log(task)
    this.forceUpdate()

    return;
	},

  _inputChange: function(event){
    // console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })

  },

  _removeItem: function (itemId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== itemId;
		});
		this.setState({data});
		return;
	},

	_taskComplete: function (itemId) {
		var data = this.state.data;
		// console.log("tis data", data)
		for (var i in data) {
			if (data[i].id == itemId) {
				if(data[i].complete === 'true'){
					data[i].complete = 'false'
				} else {
					data[i].complete = 'true'
				}
				break;
			}// else {
			// 	console.log('tickle')
			// }
		}
		this.setState({data});
		return;
	},

	render: function() {
		return (
			<div className="row">
	      <div className="col-sm-12 app-wrapper">
					<h1 className="top-header"><span id="header-letters">ToDo List</span></h1>
					<div className="row">
						<div className="col-md-12  text-center group">
							<div className="input-group input-container">
							  <input type="text" className="form-control textInput" value={this.state.searchValue} onChange={this._inputChange} placeholder="New Task" aria-describedby="basic-addon2"/>
							  <span className="input-group-addon" id="basic-addon2" onClick={this._newSubmit}> + </span>
							</div>

						</div>

					</div>
					<hr/>
					<TodoList data={this.state.data} removeItem={this._removeItem} toggleComplete={this._taskComplete} />

				</div>
			</div>
		);
	}

});
// module.exports = _inputChange

var TodoList = React.createClass({
	removeItem: function (itemId) {
		this.props.removeItem(itemId);
		return;
	},
	toggleComplete: function (itemId) {
		this.props.toggleComplete(itemId);
		return;
	},
	render: function() {

		var listNodes = this.props.data.map(function (listItem) {
      // console.log(listItem)
			return (
				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeItem={this.removeItem} toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}

			</ul>
		);
	}
});



var TodoItem = React.createClass({
	removeItem: function (evt) {
		// console.log(evt)
		evt.preventDefault();
		this.props.removeItem(this.props.nodeId);
		return;
	},
	toggleComplete: function (evt) {
		// evt.preventDefault();
		this.props.toggleComplete(this.props.nodeId);
		return;
	},

	render: function() {

    var classes = 'list-group-item list-item-grp';
		if (this.props.complete === 'true') {
			classes = classes + ' list-group-item-success';
		}
    console.log(this.props.complete)
		return (
			<li className={classes}>
				<input id="checkBox" type="checkbox" onChange={this.toggleComplete} defaultChecked={this.props.complete === 'true'? true : false}/>
				{this.props.task}
        <div className="btn-group">
					<button type="button" className="remove-btn" onClick={this.removeItem}>&#xff38;</button>
				</div>
			</li>
		);
	}
});


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
