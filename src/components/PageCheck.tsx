import PageLabel from "./PageLabel";

interface PageCheckProps {
  pageLabel: string;
  selectedPages?: string[];
  togglePage?: (page: string) => void;
}

function PageCheck({ pageLabel, selectedPages, togglePage }: PageCheckProps) {
  const checkboxClasses = `appearance-none mr-3 w-[23px] h-[23px] bg-white border border-[#CDCDCD] rounded-md transition-all duration-150 ease-in-out bg-no-repeat bg-center bg-[length:16px_16px] cursor-pointer hover:border-[#BDBDBD] hover:bg-[url('/checkbox-icon-hover.svg')] hover:bg-center hover:bg-no-repeat active:bg-[url('/checkbox-icon-active.svg')] active:border [#BDBDBD] active:shadow-[0_0_3px_3px_rgba(209,233,230,1)] checked:bg-[url('/checkbox-icon-checked.svg')] checked:border-none checked:bg-[#5087F8] checked:hover:bg-[#2469F6] checked:hover:bg-[url('/checkbox-icon-checked.svg')]
`;

  if (pageLabel === "All pages") {
    return (
      <div className="flex items-center justify-between py-2">
        <PageLabel>{pageLabel}</PageLabel>
        <input type="checkbox" className={checkboxClasses} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between py-2">
        <PageLabel>{pageLabel}</PageLabel>
        <input
          type="checkbox"
          checked={selectedPages?.includes(pageLabel)}
          onChange={() => (togglePage ? togglePage(pageLabel) : "")}
          className={checkboxClasses}
        />
      </div>
    );
  }
}

export default PageCheck;
