import SearchIcon from './ui/icons/SearchIcon';

export default function Search() {
  return (
    <div className="flex h-8 p-4 md:w-52 md:bg-zinc-100 md:border md:border-zinc-300 rounded-full items-center md:p-2">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search..."
        className="hidden md:block w-full p-1 bg-transparent outline-none"
      />
    </div>
  );
}
