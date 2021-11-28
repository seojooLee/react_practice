import React, { useState, useRef } from "react";
// 리액트 자체적인 기능으로 할 수 있는게 없다 => dom에 직접 접근 해야한다.

/**
 *  1. useRef import
 *  2. useRef 호출 : const nameInpute =useRef();
 *  3. 2번에서 만든 객체를 ref 값으로 지정
 *  4. 선택할 경우 nameInput.current.[원하는 작업]
 */

function UseRefStudy() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const nameInput = useRef();
  const { name, nickName } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
    //current => 돔을 가리키는 아이
  };

  return (
    <React.Fragment>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />

      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
        ref={nameInput} //ref를 통해 돔에 직접 접근할 수 있다.
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} : ({nickName})
      </div>
    </React.Fragment>
  );
}

export default UseRefStudy;
