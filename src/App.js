import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Template Generator</h1>
//       <button>create new</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showNewProjectPopUp: false,
      project_path: "",
      project_name: "",
      projectList: [{ key: 1, name: "Workspace 1" }]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showNewProjectPopUp = this.showNewProjectPopUp.bind(this)
  }
  async handleSubmit(e) {
    e.preventDefault()
    // fetch(`http://localhost:3000/create/project`)
    //   // .then(res => res.json())
    //   .then(result => {
    //     console.log('////////', result)
    //   })
    console.log(this.state)
    const newProject = {
      project_path: this.state.project_path,
      project_name: this.state.project_name
    }
    const response = await axios.post(
      'http://localhost:3000/create/project',
      newProject,
      { headers: { 'Content-Type': 'application/json' } }
    )
    console.log(response)
    this.setState({ projectList: [...this.state.projectList, newProject] })
  }
  showNewProjectPopUp() {
    this.setState({ showNewProjectPopUp: true })
  }
  render() {
    // const workspaceList = [{ key: 1, name: "Workspace 1" }]
    const workspaces = this.state.projectList.map((item) => (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img src="http://pluspng.com/img-png/folder-png-education-folder-icon-image-23346-2400.jpg" width="100%" height="225" />
          <div className="card-body">
            <p className="card-text text-center">{item.name}</p>
          </div>
        </div>
      </div>
    ))
    return (
      <div>
        {/* section */}
        <div className="jumboton text-center">
          <div className="container p-4">
            <h1>Node Template Generator</h1>
            <p className="lead text-muted">A web application to generate boilerplate for Node.js</p>
          </div>
        </div>
        {/* content */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm" onClick={this.showNewProjectPopUp}>
                  <img src="https://i.dlpng.com/static/png/1496258-pluspng-plus-png-1600_1600_preview.png" width="100%" height="225" />
                  <div className="card-body">
                    <p className="card-text text-center">Add New Workspace</p>
                  </div>
                </div>
              </div>
              {workspaces}
            </div>
          </div>
        </div>
        {/* Form */}
        {this.state.showNewProjectPopUp && <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Project Path:
            <input type="text" placeholder="project path" onChange={event => this.setState({ project_path: event.target.value })} />
            </label>
            <label>
              Project Name:
            <input type="text" placeholder="project name" onChange={event => this.setState({ project_name: event.target.value })} />
            </label>
            <br />
            <input type="submit" value="Create New" />
          </form>
        </div>}

      </div>
      // <div>
      //   <h1>Template Generator</h1>
      // </div>
    )
  }
}

export default App;
