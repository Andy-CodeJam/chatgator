import UserMessageBubble from './user_message_bubble';
import AssistantMessageBubble from './assistant_message_bubble';
import Message from '../types/message';

export default function ChatMessages({
  messages,
}: Readonly<{ messages: Message[] }>): JSX.Element {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-end p-24">
      {messages.map((msg) => {
        if (msg.isUser) {
          return <UserMessageBubble key={msg.id}>{msg.text}</UserMessageBubble>;
        } else {
          return (
            <AssistantMessageBubble key={msg.id}>
              {msg.text}
            </AssistantMessageBubble>
          );
        }
      })}
    </div>
  );
}
