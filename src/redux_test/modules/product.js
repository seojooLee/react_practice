import data from "../../Mok_Data.json";

//상수로 actions의 type 지정
const SET_PRODUCTS = "SET_PRODUCTS";

function setProducts(items) {
  return {
    type: SET_PRODUCTS,
    items,
  };
}

//
function getProducts() {
  return (dispatch, getStae) => {
    fetch("Mok_Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => data)
      .then((json) => dispatch(setProducts(json)))
      .catch((err) => console.log(err));
  };
}

const initialState = {}; //프로젝트를 실행할 때 default로 얻을 수 있는 state

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return applySetProducts(state, action);
    default:
      return state;
  }
}

//Reducer Functions
function applySetProducts(state, action) {
  const { items } = action;
  return {
    ...state,
    items,
  };
}

//정의 된 action type에 따라 return 값 반환
const actionCreators = {
  getProducts,
};

export default reducer;
