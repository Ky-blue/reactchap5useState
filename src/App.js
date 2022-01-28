import React, { useState } from "react";
import "./styles.css";

//状態変数countの初期値
const INITIAL_COUNT = 0;

//状態変数nameの初期値
const INITIAL_NAME = "JavaScript";

const SampleComponent = () => {
  //countは状態変数、setCountは状態変数を更新する関数
  //初期値はINITIAL_COUNT
  const [count, setCount] = useState(INITIAL_COUNT);

  //nameは状態変数、setNameはそれを更新する関数
  //初期値はINITIAL_NAME
  const [name, setName] = useState(INITIAL_NAME);

  //1ずつカウントアップするcountIncrement関数
  //現在の値=countを引数で受け取る
  //はずだったけど加算演算子でいけねぇかなこれ
  //onClickイベントリスナー配下
  const countIncrement = () => setCount(count + 1);

  //1ずつカウントダウンするcountDecrement関数
  //現在の値=countを引数で受け取る
  //はずだったけど減算演算子でいけねぇかな
  //onClickイベントリスナー配下
  const countDecrement = () => setCount(count - 1);

  //カウントをリセット=INITIAL_COUNTをcountに代入する関数
  //onClickイベントリスナー配下
  const countReset = () => setCount(INITIAL_COUNT);

  //文字列の状態変数を更新する関数
  //onChangeイベントリスナー配下
  //これ単一文だけどreturnは省略して波括弧省略してないの？
  //それとも関数実行するだけだからいいのか？
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/* カウントの表示。countとsetCountがここ */}
        現在のカウント数:<b>{count}</b>
        <br />
        <button onClick={countIncrement}>increment</button>
        <button onClick={countDecrement}>decrement</button>
        <button onClick={countReset}>reset</button>
      </p>

      <p>
        {/* 状態変数はname。文字列を表示 */}
        Hello, <b>{name}</b>
        <br />
        name の初期値: <b>{INITIAL_NAME}</b>
      </p>

      {/* フォームの中身が変更すると状態変数nameも変更される */}
      <input type="text" onChange={handleChangeName} />
    </div>
  );
};

export default function App() {
  return (
    <>
      <SampleComponent />
      <SampleComponent />
    </>
  );
}
