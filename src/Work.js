import React, { PropTypes } from 'react';
import Card from './components/Card';
import {getJson} from './utils/helpers.js';
import Bg from './image/home1.jpg';
import {go} from 'js-csp';

go(function* () {
  console.log('something!');
});
class Work extends React.Component {
  constructor(){
    super();
    this.state={
      cardData:[],
      wait:true
    }
  }
  componentDidMount() {
    getJson().then((recData) => {
      this.setState({
        cardData: recData.data,
        wait:false
      });
    })
  }
  render () {
    console.log(this.state.cardData);
    let cards = this.state.cardData.map( (item,i) => <Card {...item} key={i} />
     );
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ? "请稍等" : cards}
        </div>
      </div>
    )
  }
}

export default Work;
