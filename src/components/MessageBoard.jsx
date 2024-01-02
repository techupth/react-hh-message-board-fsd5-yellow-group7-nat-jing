import { useState } from "react";

function MessageBoard() {
  // 1 State มีสองอัน
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  //messageList =[]
  const handleAddMessageList = (event) => {
    event.preventDefault();
    // 5เอาข้อความ messageInput ใส่ลงไปใน Array messageList
    // 1) เราต้อง clone ตัว array messageList ก่อนไว้ใน variable อันใหม่
    const newMessageList = [...messageList]; //... คือ spread
    // 2)  เราจะ push messageInput ใส่เข้าไปใน variable อันใหม่
    newMessageList.push(messageInput);
    // 3) update state
    setMessageList(newMessageList);
  };

  const handleRemoveMessage = (messageIndex) => {
    // messageList = [""]
    // 6
    //1) clone array
    const newMessageList = [...messageList];
    //2) splice
    newMessageList.splice(messageIndex, 1);
    //3) update state
    setMessageList(newMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          {/* // 2 เก็บข้อมูลที่ผู้ใช้งานพิมใส่ input ลงใน state */}
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
          />
        </label>
        <button
          className="submit-message-button"
          // 4 ทำให้ปุ่ม submit คลิ๊กแล้วเพิ่ม messageInput ลงใน array messageList
          onClick={handleAddMessageList}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {/* // เอา messageList มา render ด้วย array.map */}
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => handleRemoveMessage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
