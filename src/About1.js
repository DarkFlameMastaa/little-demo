import React, { PropTypes } from 'react';
import axios from 'axios';
import {searchGit} from './utils/helpers.js';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:""
    }
  }
  componentDidMount(){
    searchGit().then((recData) => {
      this.setState({
        data:recData.data,
        wait:false
      });
    })
  }
  handleInput(e){
    this.setState({
      inputValue:e.target.value
    });
  }
  handleSerch(){

  }
  render () {
    let gitInfo=(
      <div>
        <h1>{this.state.data.name}</h1>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/><button onClick={this.handleSerch.bind(this)}>搜索</button>
        {
          this.state.wait ? '正在获取数据' :
          gitInfo
        }
      </div>
    )
  }
}

export default About;
