import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  Heading,
  FavouriteLink,
} from './styles';


class FavouriteList extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    const { history } = this.props;
    history.push('articles');
  }

  render() {
    let { favourite } = this.props;
    return (
      <ContainerDiv>
        <Heading>List Of favourite Article's</Heading>
        <FavouriteLink onClick={this.navigateToHomePage}>Go Back</FavouriteLink>
        {favourite.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
            </ContentDiv>
          );
        })}
      </ContainerDiv>
    );
  }
}


const mapStateToProps = (state) => ({
    favourite: state.favourite,
  });


export default withRouter(connect(
  mapStateToProps,
  null,
)(FavouriteList));

