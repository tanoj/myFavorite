import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { favouriteArticle } from '../actions/article';
import {
  ContainerDiv,
  ContainerIn,
  ContentDiv,
  ItemDiv,
  AnchorDiv,
  Heading,
  ItemImg,
  FavouriteLink,
} from './styles';


class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.navigateToFavouriteArticlePage = this.navigateToFavouriteArticlePage.bind(this);
  }

  navigateToDetailsPage(articleId) {
    const { history } = this.props;
    history.push(`article/${articleId}`);
  }

  addToFavourite(item) {
    let { requestfavouriteArticle } = this.props;
    requestfavouriteArticle(item);
  }

  navigateToFavouriteArticlePage() {
    const { history } = this.props;
    history.push('favourite');
  }

  render() {
    let { collection } = this.props;
    return (
      <ContainerDiv>
        <Heading>List Of Articles</Heading>
        <FavouriteLink onClick={this.navigateToFavouriteArticlePage}>View Favourite Articles</FavouriteLink>
        <ContainerIn>
        {collection.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
              <ItemImg src={item.urlToImage} />
              <AnchorDiv onClick={() => this.navigateToDetailsPage(item.id)}> 
                Veiw Details 
              </AnchorDiv>
              <AnchorDiv onClick={() => this.addToFavourite(item)}> 
                Add to Favourite
              </AnchorDiv>
            </ContentDiv>
          );
        })}
        </ContainerIn>
      </ContainerDiv>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestfavouriteArticle(item) {
    dispatch(favouriteArticle(item));
  },
});


export default withRouter(connect(
  null,
  mapDispatchToProps,
)(ArticlesList));

