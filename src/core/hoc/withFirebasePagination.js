import React from 'react';

const withFirebasePaginatiopn = ({ api }) => WrappedComponent => {
  class Inner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstVisible: null,
        lastVisible: null,
        hasPrev: true,
        hasNext: true,
        data: [],
        loading: true,
      };
      this.loadNextPage = this.loadNextPage.bind(this);
      this.loadPrevPage = this.loadPrevPage.bind(this);
    }

    async loadNextPage() {
      this.setState({ loading: true });
      const startAfter = this.state.lastVisible;
      const resp = await api({ startAfter });
      let newState = { loading: false };
      if (resp.data.length > 0) {
        newState = {
          ...newState,
          data: resp.data,
          hasPrev: true,
          firstVisible: resp.meta.firstVisible,
          lastVisible: resp.meta.lastVisible,
        };
      } else {
        newState = { ...newState, hasNext: false };
      }
      this.setState(newState);
    }

    async loadPrevPage() {
      this.setState({ loading: true });
      const endBefore = this.state.firstVisible;
      const resp = await api({ endBefore });
      let newState = { loading: false };
      if (resp.data.length > 0) {
        newState = {
          ...newState,
          data: resp.data,
          hasNext: true,
          firstVisible: resp.meta.firstVisible,
          lastVisible: resp.meta.lastVisible,
        };
      } else {
        newState = { ...newState, hasPrev: false };
      }
      this.setState(newState);
    }
    render() {
      return (
        <WrappedComponent
          hasNext={this.state.hasNext}
          hasPrev={this.state.hasPrev}
          loadPrevPage={this.loadPrevPage}
          loadNextPage={this.loadNextPage}
          data={this.state.data}
          loading={this.state.loading}
          {...this.props}
        />
      );
    }
  }
  Inner.displayName = `FirebasePaginated(${WrappedComponent.displayName})`;
  return Inner;
};

export default withFirebasePaginatiopn;
