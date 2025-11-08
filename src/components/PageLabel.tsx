interface PageLabelProps {
  children: React.ReactNode;
}

function PageLabel({ children }: PageLabelProps) {
  const widthClass = children === "All pages" ? "w-[64px]" : "w-[50px]";

  return (
    <label
      className={`ml-3 ${widthClass} h-[18px] text-[#1F2128] font-montserrat font-normal text-[14px] leading-[130%] align-middle tracking-[0px]`}
    >
      {children}
    </label>
  );
}

export default PageLabel;
