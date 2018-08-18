export const types = {
  ADD_ITEM: 'ADD_ITEM'
}

export const actionCreators = {
  addItem: (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item
    }
  }
}

const initialState = {
  items: ['demo 1', 'demo 2'],
}

export const reducer = (state = initialState, action) => {
  const { items } = state;
  const {type, payload} = action

  switch(type) {
    case types.ADD_ITEM :{
      return {
        ...state,
        items :[payload, ...items]
      }
    }
    default: {
      return state
    }
  }
}
