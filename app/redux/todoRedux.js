export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const actionCreators = {
  addItem: (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item
    }
  },
  removeItem: (index) => {
    return {
      type: types.REMOVE_ITEM,
      payload: index
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
    case types.REMOVE_ITEM: {
      return{
        ...state,
        items: items.filter((items,i)=> i!== payload)
      }
    }
    default: {
      return state
    }
  }
}
