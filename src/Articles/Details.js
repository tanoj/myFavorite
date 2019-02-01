import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {
  Cards,
  CardItem,
  CardImg,
  CardContent,
} from './styles';


const Details = ({
  item,
}) => {
  return (
  <Cards>
  <CardItem>
    <CardImg src={item.urlToImage} alt="Sample photo" />
    <CardContent>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href={item.url} target='_blank'>Go to Article Page</a>
    </CardContent>
  </CardItem>
  </Cards>
  );
};


const mapStateToProps = (state, ownProps) => {
  console.log(state.articles);
  const id = parseInt(ownProps.match.params.id, 0);
  let item = state.articles.items.filter((m) => {
    return m.id === id;
  })[0];
  return {
    item,
  };
};


export default withRouter(connect(
  mapStateToProps,
  null,
)(Details));


