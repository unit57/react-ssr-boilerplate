import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '@redux/actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  head() {
    const users = this.props;
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  renderUsers() {
    const { users } = this.props;
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of userszzzz
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { getUsers: fetchUsers })(UsersList)
};
