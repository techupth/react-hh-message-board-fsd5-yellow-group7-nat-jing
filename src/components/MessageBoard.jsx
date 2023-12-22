import { useState } from "react";

function MessageBoard() {
  // step 1) สร้าง state ขึ้นมา 2 อัน
  // 1.1) เก็บข้อความของส่วน input เป็น string
  // 1.2) Array ของข้อความ (["hi", "สวัสดี"]) | Event: click จากปุ่ม "submit"
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  // Variable ในส่วนของการแสดง input message
  const handleAddMessageList = () => {
    // 5) เอาข้อความ messageInput ใส่ลงไปใน Array messageList
    // 5.1) เราต้อง clone ตัว array  messageList ก่อนไว้ใน variable อันใหม่
    const newMessageList = [...messageList];
    // 5.2) เราจะ push messageInput ใส่เข้าไปใน variable อันใหม่
    newMessageList.push(messageInput);
    // 5.3) update state
    setMessageList(newMessageList);
  };

  // Variable ในส่วนของการลบ message
  const handleRemoveMessage = (index) => {
    const updatedMessages = [...messageList];
    updatedMessages.splice(index, 1);
    setMessageList(updatedMessages);
  };

  return (
    <div className="app-wrapper">
      {/* Topic text */}
      <h1 class="app-title">Message board</h1>

      {/* input */}
      <div class="message-input-container">
        <label>
          {/* 2) เก็บข้อมูลที่ผู้ใช้งานพิมพ์มาจาก Input ลงใน State */}
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>

        {/* Submit button */}
        {/* 4) ทำให้ปุ่ม Submit คลิกแล้วเพิ่ม messageInput ลงใน Array messageList */}
        <button
          className="submit-message-button"
          onClick={handleAddMessageList}
        >
          Submit
        </button>
      </div>

      {/* ส่วนของ state ที่แสดงข้อความและปุ่ม Remove */}
      <div class="board">
        {/* 3) เอา messageList มา render ด้วย Array.map */}
        {/* ส่วนของ state ข้อความที่แสดง */}
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>

              {/* ปุ่ม remove */}
              <button
                className="delete-button"
                onClick={() => {
                  handleRemoveMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>

      {/* End of code here */}
    </div>
  );
}

export default MessageBoard;
