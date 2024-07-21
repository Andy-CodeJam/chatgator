export default function MessageInput({
  messages,
  setMessages,
  handleClickSend,
  handleClickReset,
  handleKeyCombo,
}) {
  return (
    <div className="flex items-center justify-between w-[80vw] p-4 bg-gray-800 absolute bottom-8">
      <input
        type="text"
        className="w-full p-2 text-white bg-gray-900 border-none rounded-lg"
        placeholder="Type a message..."
        onKeyDown={handleKeyCombo}
        autoFocus={true}
      />
      <button
        className="p-2 ml-4 text-white bg-blue-500 rounded-lg border-[2px]"
        onClick={handleClickSend}
      >
        Send
      </button>
      <button
        className="p-2 ml-4 text-black bg-white border-blue-500 border-[2px] rounded-lg"
        onClick={handleClickReset}
      >
        Reset
      </button>
    </div>
  );
}
