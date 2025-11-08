import { useState } from "react";
import Button from "./components/Button";
import PageCheck from "./components/PageCheck";

function App() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const togglePage = (page: string) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[370px] h-[326px] bg-white shadow-[0_8px_15px_0_rgba(20,20,20,0.12),0_0_4px_0_rgba(20,20,20,0.1)] rounded-lg p-4">
        <PageCheck pageLabel="All pages" />
        <hr className="my-3 w-full" />
        {pages.map((page) => (
          <PageCheck
            pageLabel={page}
            key={page}
            selectedPages={selectedPages}
            togglePage={togglePage}
          />
        ))}
        <hr className="my-3" />
        <Button selectedPages={selectedPages}>Done</Button>
      </div>
    </div>
  );
}

export default App;
