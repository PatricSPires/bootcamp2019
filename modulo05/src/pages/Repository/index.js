import React, { Component } from 'react';
import api from '../../services/api';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    isLoading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repositoryName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repositoryName}`),
      api.get(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      isLoading: false,
    });
  }

  render() {
    const { repository, issues, isLoading } = this.state;
    return <h1>Chora</h1>;
  }
}
