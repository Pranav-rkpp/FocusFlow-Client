const SearchTask = (props) => {
  const { searchTask, setSearchTask } = props;
  return (
    <div className="search-task">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Search : </label>
        <input
          type="search"
          placeholder="Enter Task..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchTask;
