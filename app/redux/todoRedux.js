export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS'
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
  },
  toogleItem: (id) => {
    return {
      type: types.TOGGLE_ITEM_COMPLETED,
      payload: id
    }
  },
  remComItems:() => {
    return{
      type: types.REMOVE_COMPLETED_ITEMS,
      payload: undefined
    }
  }
}

const initialState = {
  items: [],
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
        items: items.filter((item,i)=> i!== payload)
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return{
        ...state,
        items: items.map((item,id)=>{
          if(id==payload){
            item.checked = !item.checked;
          }
          return item;
        })
      }
    }
    case types.REMOVE_COMPLETED_ITEMS: {
      return{
        ...state,
        items:items.filter((item)=> !item.checked)
      }
    }
    default: {
      return state
    }
  }
}
