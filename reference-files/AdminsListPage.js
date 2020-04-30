import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '@redux/actions';
import requireAuth from '@components/hocs/require-auth';

class AdminsListPage extends Component {
  componentDidMount() {
    const { getAdmins } = this.props;
    getAdmins();
  }

  renderAdmins() {
    const { admins } = this.props;
    return admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { getAdmins: fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
