import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  test(){
    console.log('/////////////')
    function onFs(fs){
      fs.root.getDirectory('Documents2', {create:true}, function(directoryEntry){
        //directoryEntry.isFile === false
        //directoryEntry.isDirectory === true
        //directoryEntry.name === 'Documents'
        //directoryEntry.fullPath === '/Documents'
        
        }, onError);

      }

    // Opening a file system with temporary storage
    window.requestFileSystem(TEMPORARY, 1024*1024 /*1MB*/, onFs, onError);
  }
  return (
    <div>
      <h1>Template Generator</h1>
      <button onClick={this.test}>create new</button>
    </div>
  );
}

export default App;
