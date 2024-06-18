import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" className="border-1 text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white"
            placeholder="Send message..."
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend className="text-white" />
            </button>
        </div>
    </form>
  )
}

export default MessageInput