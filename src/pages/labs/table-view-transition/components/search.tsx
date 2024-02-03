import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Search() {
  return (
    <div className="search-wrapper mb-3">
      <div className="search flex bg-neutral-100 rounded-xl items-center p-2">
        <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-neutral-400" />
        <input
          className="bg-transparent appearance-none flex-1 outline-none"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
}

export { Search };
