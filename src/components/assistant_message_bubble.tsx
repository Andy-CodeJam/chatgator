export default function AssistantMessageBubble({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div className="w-full flex items-end align-bottom justify-start my-2">
      <div className="bg-slate-400 border-white border-[1px] text-black rounded-xl px-20 py-10 flex">
        {children}
      </div>
    </div>
  );
}
