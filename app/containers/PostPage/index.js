/**
 *
 * PostPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPostPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPostsSuccess } from './actions';

export function PostPage(postPage) {
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });
  console.log(postPage);
  return (
    <div>
      <Helmet>
        <title>PostPage</title>
        <meta name="description" content="Description of PostPage" />
      </Helmet>
      <div>POSTS</div>
    </div>
  );
}

// PostPage.propTypes = {
//   postPage: PropTypes.array,
// };

const mapStateToProps = createStructuredSelector({
  postPage: makeSelectPostPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: evt => dispatch(loadPostsSuccess(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PostPage);
