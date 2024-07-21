export default function UserMessageBubble({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div className="w-full flex items-end align-bottom justify-end my-2">
      <div className="bg-blue-700 border-white border-[1px] rounded-xl px-20 py-10 flex">
        {children}
      </div>
    </div>
  );
}
