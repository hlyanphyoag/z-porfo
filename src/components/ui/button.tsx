export const Button = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex p-[1.5px] rounded-full bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)]">
      <button
        className="
          cursor-pointer  
          inline-flex items-center justify-center rounded-full
          bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] text-black
          px-[20px] py-[10px] text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
      >
        {children}
      </button>
    </div>
  );
  