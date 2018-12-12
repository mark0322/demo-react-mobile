import { combineReducers, createStore } from 'redux'
import * as constants from '../constants'
import * as actionCreators from '../actions'

const initialState = {
  todos: [
    {
      text: 'Learn React',
      completed: true,
    }, 
    {
      text: 'Learn Redux',
      completed: false,
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}

// reducer - todo
function todos(state = [], action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case constants.TOGGLE_TODO:
      return state.map((item, index) => {
        if (action.index === index) {
          item.completed = !item.completed
        }
        return item
      })
    default:
      return state
  }  
}

// reducer - visibilityFilter:
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const store = createStore(todoApp, initialState);
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(actionCreators.toggleTodo(0))
store.dispatch(actionCreators.addTodo('Learn about combineReducers'));
store.dispatch(actionCreators.setVisibilityFilter('Learn about combineReducers'));
// console.log(store.getState())
export {
  todoApp
}

// reducer - app
// function todoApp(state = initState, action) {
//   switch (action.type) {
//     case constants.SET_VISIBILITY_FILTER:
//       return {
//         ...state,
//         visibilityFilter: action.filter
//       }
//     case constants.ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       }
//     case constants.TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, index) => {
//           if (action.index === index) {
//             todo.completed = !todo.completed
//           }
//           return todo
//         })
//       }
//     default:
//       return state
//   }
// }