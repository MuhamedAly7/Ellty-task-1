interface ButtonProps {
  selectedPages: string[];
  children: React.ReactNode;
}

function Button({ selectedPages, children }: ButtonProps) {
  return (
    <button
      onClick={() => alert(`Selected: ${selectedPages.join(", ") || "None"}`)}
      className="mt-3 w-full bg-[#FFCE22] text-[#1F2128] font-medium py-2 rounded-md hover:bg-[#FFD84D] transition"
    >
      {children}
    </button>
  );
}

export default Button;
