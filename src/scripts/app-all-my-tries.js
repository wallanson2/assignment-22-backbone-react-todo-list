// const Backbone = require('Backbone')
// const ReactDOM = require('react-dom')
// const React = require('react')

// var TodoList = React.createClass({
//   render: function() {
//       return (
//         <div className="todoListMain">
//           <div className="header">
//             <form>
//               <input placeholder="enter task">
//               </input>
//               <button type="submit">add</button>
//             </form>
//           </div>
//         </div>
//       );
//     }
// });
//
//
//
// ReactDOM.render(<div><TodoList/></div>,destination);
// ReactDOM.render(document.querySelector('#app-container'))

//============  another attempt  =====================================
// var appContainer = document.querySelector('#app-container')
//
// let Todo = {
// 	Models: {},
// 	Collections: {},
// 	Views: {}
//
// };
//
// let TodoModels = Backbone.Model.extend({
// 	defaults: function() {
// 		return {
// 			"task" : '',
// 			"complete" : "false"
// 		};
// 	},
//
// });
//
// let TodoCollections = Backbone.Collection.extend({
// 	Model: TodoModels,
// 	initialize: function() {
// 		console.log('Todo initialize')
// 	}
// });
//
// let TodoView = Backbone.View.extend({
// 	el: ('#app-container'),
// 	initialize: function(){
// 		this.TodoCollectionsInstance = new TodoCollections()
// 	}
// })
//
// let TodoRouter = Backbone.Router.extend({
// 	routes: {
// 		"undone/:notComplete" : "showNotDonePage",
// 		"done/:complete" : "showDonePage",
// 		"*path" : "showHomePage"
// 	},
//
// 	showHomePage: function() {
// 		appContainer.innerHTML = `
// 															<div id="header-container">
// 																<h1>Todo List</h1>
// 															</div>
// 															<div className="group">
// 														 		<input type="text" placeholder="Enter New Todo"/>
// 														 		<button className="btn btn-group"> + </button>
// 																<hr/>
//
// 																<ul class="todo-listing">
// 																	<li>Wash Clothes</li>
// 																</ul>
// 															</div> `
//
// 	}
// });
//
//
//
// var myApp = new TodoRouter()
// Backbone.history.start()
//
//
//
//


//========================    1   =========================
// let ShoutOutModel = Backbone.Model.extend({})
// getInitialState: function(){
//   let startingState = { task: 'wash clothes' }
//   return startingState
// }
// // const HomeView = React.createClass({
// //   getInitialState: function(){
// //     // let startingState = { task: 'wash clothes' }
// //     // return startingState
// //   },
//
//
//     let modAttributes = []
// =======================
//
// const HomeView = React.createClass({
// 	getInitialState: function(){
//     let defaultMod = new ShoutOutModel()
//   //   // let mod2 = new ShoutOutModel()
// 		return {
// 			data:[ { "id":"001","task": "wash clothes", "complete":"false" }]
// 		};
//   //
//   //   let modAttributes = {
//   //      task: "Cook Dinner"
// 	},
//
//     // let modAttributes2 =
//
//     defaultMod.set(modAttributes)
//       this.startingStateObj = {
//
//          shoutOutData : defaultMod
//       }
//       return this.startingStateObj
//       // console.log(this.startingStateObj)
//   },
//
// 	var app =
//====================
//
//   _handleNewSubmit: function(){
//     let theTask = this.refs.theTaskEl.value
//     console.log('the value', theTask)
//
//     let modAttributes = {
//       // modAttributes,
//       task: theTask
//     }
//     let newMod = new ShoutOutModel()
//       newMod.set(modAttributes)
//   },
//   console.log(this.state.modAttributes)
//   render: function(){
//     return (
//       <div className="container">
//         <h1 className="header">Task List</h1>
//         <div className="row">
//           <div className="col-sm-8 task-column">
//             <input type="text" ref="theTaskEl" className="form-control" placeholder="Enter New Task" />
//             <button className="btn btn-info" onClick={this._handleNewSubmit}> + </button>
//             <br/>
//             <div className="new-task">
//               <h1 className="tasked">{this.state.newMod}</h1>
//             </div>
//           </div>
//
//         </div>
//       </div>
//     )
//   }
// })
//
// const ShoutOut = React.createClass({
//   // console.log('hi')
//
//   render: function (){
//     return(
//       <div className="col-sm-8">
//         <div className="new-task">
//           <h1 className="task">{this.props.shoutData.get('task')}</h1>
//         </div>
//       </div>
//     )
//   }
// })
//
// console.log('hi')
// ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))

//===================  2   ========   2    ===============
//
// const Backbone = require('Backbone')
// const ReactDOM = require('react-dom');
// const React = require('react');
// // const Bootstrap = require('bootstrap')
// // console.log(Backbone)
// var appContainer = document.querySelector('#app-container')
//
//
//
//
//
//
// let ShoutOutModel = Backbone.Model.extend({})
//
// const HomeView = React.createClass({
//
// 	// getInitialState: function () {
// // 		return {
// //
// // 		};
// // 	},
//
//   getInitialState: function(){
//      let defaultMod = new ShoutOutModel()
//   //   // let mod2 = new ShoutOutModel()
//     let startingState = {
// 			data: [
// 							{"id":"001","task":"Grocery Store","complete":"false"},
// 							{"id":"002","task":"Mow Lawn","complete":"false"},
// 							{"id":"003","task":"Go to work","complete":"false"}
// 						]
// 		},
//     // return {startingState,
//
//     // let modAttributes = {
// 		// 	// data: [
// 		// 	// 				{"id":"001","task":"Grocery Store","complete":"false"},
// 		// 	// 				{"id":"002","task":"Mow Lawn","complete":"false"},
// 		// 	// 				{"id":"003","task":"Go to work","complete":"false"}
// 		// 	// 			]
//     // },
//
//     // let modAttributes2 =
//
//     defaultMod.set(modAttributes)
//       this.startingStateObj = {
//
//          shoutOutData : defaultMod
//       }
//       return this.startingStateObj
//       console.log(this.startingStateObj)
//   },
//
// 	// _newSubmit: function (task) {
// 	// 	var data = this.state.data;
// 	// 	var id = this.newId().toString();
// 	// 	var complete = 'false';
// 	// 	data = data.concat([{id, task, complete}]);
// 	// 	this.setState({data});
// 	// },
//
//   _handleNewSubmit: function(){
//     let theTask = this.refs.theTaskEl.value
//     console.log(theTask)
//
//     let modAttributes = {
//       // modAttributes,
//       task: theTask
//     }
//     let newMod = new ShoutOutModel()
//       newMod.set(modAttributes)
//   },
//
//   render: function (){
//     return (
//       <div className="container">
//         <h1 className="header">Task List</h1>
//         <div className="row">
//           <div className="col-sm-8 task-column">
//             <input type="text" ref="theTaskEl" className="form-control" placeholder="Enter New Task" />
//             <button className="btn btn-info" onClick={this._handleNewSubmit}> + </button>
//             <br/>
//             <div className="new-task">
//               <h1 className="tasked">wash clothes</h1>
//             </div>
//           </div>
//
//         </div>
//       </div>
//     )
//   }
// })
//
// const ShoutOut = React.createClass({
//   // console.log('hi')
//
//   render: function (){
//     return(
//       <div className="col-sm-8">
//         <div className="new-task">
//           <h1 className="task">{this.props.shoutData.get('task')}</h1>
//         </div>
//       </div>
//     )
//   }
// })
//
// ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))

//=====================   3 3 3 3   ==================================
//
// var HomeView = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			data: [
// 				{"id" : "001", "task" : "Grocery Store", "complete" : "false"},
// 				{"id" : "002", "task" : "Mow Lawn", "complete" : "false"},
//         {"id" : "003", "task" : "Go to work", "complete" : "false"}
// 			]
// 		};
// 	},
// 	newId: function () {
// 		return Math.floor(Math.random()*900) + 100;
// 	},
//
//
//   _newSubmit: function (task) {
//
//
// 		console.log('task', task)
// 		var data = this.state.data;
// 		var id = this.newId().toString();
// 		var complete = 'false';
// 		data = data.concat([{id, task, complete}]);
// 		this.setState({data});
// 		console.log("data", data)
// 		// this.forceUpdate(task)
// 		return;
// 	},
//
//   _removeItem: function (itemId) {
// 		var data = this.state.data;
// 		data = data.filter(function (el) {
// 			return el.id !== itemId;
// 		});
// 		this.setState({data});
// 		return;
// 	},
//
// 	_taskComplete: function (itemId) {
// 		var data = this.state.data;
// 		console.log("tis data", data)
// 		for (var i in data) {
// 			if (data[i].id == itemId) {
// 				if(data[i].complete === 'true'){
// 					data[i].complete = 'false'
// 				} else {
// 					data[i].complete = 'true'
// 				}
// 				break;
// 			} else {
// 				console.log('tickle')
// 			}
// 		}
// 		this.setState({data});
// 		return;
// 	},
//
// 	render: function() {
// 		return (
// 			<div className="row">
// 	      <div className="col-sm-12">
// 					<h1 className="top-header"><span id="header-letters">ToDo List</span></h1>
// 					<div className="row">
// 						<div className="col-md-6 text-center group">
// 							<div className="input-group">
// 							  <input type="text" className="form-control" placeholder="New Task" aria-describedby="basic-addon2"/>
// 							  <span className="input-group-addon" id="basic-addon2" onClick={this._newSubmit}> + </span>
// 							</div>
//
// 						</div>
//
// 					</div>
// 					<hr/>
// 					<TodoList data={this.state.data} removeItem={this._removeItem} toggleComplete={this._taskComplete} />
//
// 				</div>
// 			</div>
// 		);
// 	}
//
// });
//					// <TodoList {listNodes}/>


//							<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
							// <button className="btn btn-primary submitButton"   onClick={this._newSubmit}>Submit</button>



// var TodoList = React.createClass({
// 	removeItem: function (itemId) {
// 		this.props.removeItem(itemId);
// 		return;
// 	},
// 	toggleComplete: function (itemId) {
// 		this.props.toggleComplete(itemId);
// 		return;
// 	},
// 	render: function() {
// 		var listNodes = this.props.data.map(function (listItem) {
//
// 			return (
// 				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeItem={this.removeItem} toggleComplete={this.toggleComplete} />
// 			);
// 		},this);
// 		return (
// 			<ul className="list-group">
// 				{listNodes}
// 			</ul>
// 		);
// 	}
// });
//Node
// var TodoItem = React.createClass({
// 	removeItem: function (evt) {
// 		console.log(evt)
// 		evt.preventDefault();
// 		this.props.removeItem(this.props.nodeId);
// 		return;
// 	},
// 	toggleComplete: function (evt) {
// 		evt.preventDefault();
// 		this.props.toggleComplete(this.props.nodeId);
// 		return;
// 	},
// 	//onClick={this.toggleComplete}
// 	// console.log(this.props.task)
// 	// console.log({this.props.task})
// 	render: function() {
// 		var classes = 'list-group-item';
// 		if (this.props.complete === 'true') {
// 			classes = classes + ' list-group-item-success';
// 		}
// 		return (
// 			<li className={classes}>
// 				<input id="checkBox" type="checkbox"/>
// 				{this.props.task}
// 				<div className="btn-group">
// 					<button type="button" className="remove-btn" onClick={this.removeItem}>&#xff38;</button>
// 				</div>
// 			</li>
// 		);
// 	}
// });




// ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
// );
// <div className="row">
// 	<div className="col-md-12 text-center">
// 		<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
//
// 		<button className="btn btn-primary submitButton"   onClick={this.doSubmit}>Submit</button>
// 	</div>

//===================== 3 3 3 3   ====================================

//col-md-offset-2
// text-right
// <div className="form-group">
// 	<div className="col-md-10">
// 		<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
// 	</div>
// </div>
// <div className="row">
// 	<div className="col-md-10 col-md-offset-2 text-right">
// 		<button className="btn btn-primary submitButton"   onClick={this.doSubmit}>Submit</button>
// 	</div>
// </div>


// <div className="form-group">
// 	<div className="col-md-10">
// 		<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
// 	</div>
// </div>
///=================////===============///////==========================





//==============================/////============================================
// onSubmit={this.doSubmit}   							<h2 className="col-md-2">Task items</h2>

 // form-horizontal

//type="submit" value="Save Item"   label htmlFor="task"  control-label  // <div className="clearfix"> </div>
// ReactDOM.render(<HomeView/>, document.querySelector('#app-container')
// );

				// <h1 className='header'>Daily ToDo List</h1>

// <div className="row">
// 	<h2 className="col-md-2">Task items</h2>
// 	<div className="col-md-10">
// 	<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
// </div>
// 	<div className="col-md-10 col-md-offset-2 text-right">
// 		<button className="btn btn-primary submitButton">Submit</button>
// 	</div>
// // </div>
// <div className="commentForm vert-offset-top-2">
// 	<hr/>
// 		// <form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
// 			<div className="form-group">
// 				<h2 className="col-md-2">Task items</h2>
// 				<div className="col-md-10">
// 					<input type="text" id="task" ref="task" className="form-control" placeholder="Enter Task Item" />
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-md-10 col-md-offset-2 text-right">
// 					<button className="btn btn-primary submitButton">Submit</button>
// 				</div>
// 			</div>
// 		// </form>
//
// </div>

//===============     4     ===========================================

// const Backbone = require('Backbone')
// const ReactDOM = require('react-dom');
// const React = require('react');
//
// var appContainer = document.querySelector('#app-container')
//
// var TodoRouter = Backbone.Router.extend({
//
// 		routes: {
// 			"" : "showHomePage"
// 		},
//
// })
//===============================================================
//===============    ShoutOutModel  =============================
//
//
