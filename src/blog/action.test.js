import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';

jest.mock('../api.js');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const postList = [{ id: 'id1', text: 'text1' }, { id: 'id2', text: 'text2' }];

describe('Actions # fetchPostList', () => {
  const store = mockStore({});

  it('should dispatch an `loadPostList` action', () =>
    store.dispatch(actions.fetchPostList()).then(() => {
      const action = store.getActions()[0];
      expect(action).toEqual(actions.loadPostList(postList));
    }));
});
