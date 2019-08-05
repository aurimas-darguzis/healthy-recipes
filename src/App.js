import React, { useState, useEffect } from 'react';
import './App.css';
import Contentful from './Contentful';
Contentful.getEntries({
  content_type: 'quickStartMenu'
}).then(res => console.log(res.items))
function App() {


  return (
    <div className="App">
     Hi
    </div>
  );
}

export default App;
