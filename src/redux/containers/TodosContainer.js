import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos"; //액션 함수 불러옴

function TodosContainer() {
  const todos = useSelector((state) => state.todos); //todos에서 관리하고 있는 상태를 가져옴
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]); //액션 객체 생성
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}
export default TodosContainer;
