import * as constants from '../constants'

//action creators
export const addTodo = text => ({
  type: constants.ADD_TODO,
  text
});


export const toggleTodo = index => ({
  type: constants.TOGGLE_TODO,
  index
});

// 筛选当前显示的待办事项列表
export const setVisibilityFilter = filter => ({
  type: constants.SET_VISIBILITY_FILTER,
  filter
});
