'use client';

import ChatMessages from './chat_messages';
import MessageInput from './message_input';
import { useEffect, useState } from 'react';
import Message from '../types/message';

export default function ChatApp(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: 'Hello! How can I help you today?',
      isUser: false,
    },
  ]);

  const handleClickReset = () => {
    setMessages([
      {
        id: 0,
        text: "Ok, let's start over. How can I help you today?",
        isUser: false,
      },
    ]);
  };

  const handleClickSend = () => {
    const input = document.querySelector('input');
    if (input.value) {
      setMessages([
        ...messages,
        {
          id: messages.length,
          text: input.value,
          isUser: true,
        },
      ]);
      input.value = '';
    }
  };

  const handleKeyCombo = (e) => {
    if (e.key === 'n' && e.ctrlKey) {
      handleClickReset();
    } else if (e.key === 'Enter') {
      handleClickSend();
    }
  };

  return (
    <div
      className="w-full h-[95vh] flex flex-col items-center justify-end p-24"
      onKeyDown={handleKeyCombo}
    >
      <ChatMessages messages={messages} />
      <MessageInput
        messages={messages}
        setMessages={setMessages}
        handleClickSend={handleClickSend}
        handleClickReset={handleClickReset}
        handleKeyCombo={handleKeyCombo}
      />
    </div>
  );
}
