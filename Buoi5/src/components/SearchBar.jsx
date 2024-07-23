import './SearchBar.css'
const SearchBar = ({onChange}) => {
    const handleTextChange = (e) =>
    {
        onChange(e.target.value)
    }
    return (
        <input id="SearchBar" type="text" placeholder='Search Text' onChange={handleTextChange} />
    )
}

export default SearchBar