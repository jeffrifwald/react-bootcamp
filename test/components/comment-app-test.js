import { shallow } from 'enzyme';
import React from 'react';

import CommentApp from '../../src/components/comment-app';
import CommentBox from '../../src/components/comment-box';

describe('CommentApp', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CommentApp />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('commentApp')).toBe(true);
    expect(wrapper.find(CommentBox).length).toBe(1);
  });

  it('should handle a submit', () => {
    const wrapper = shallow(<CommentApp />);
    const instance = wrapper.instance();
    const comment = {
      author: 'Mock Mockerson',
      text: 'Mock mock mock.',
    };

    expect(wrapper.state('comments')).toEqual([]);
    instance.handleSubmit(comment);
    expect(wrapper.state('comments')).toEqual([comment]);
  });

  it('should fetch data on mount', () => {
    const wrapper = shallow(<CommentApp />);
    const instance = wrapper.instance();

    instance.fetchData = jest.fn();
    instance.componentDidMount();
    expect(instance.fetchData).toBeCalled();
  });
});
