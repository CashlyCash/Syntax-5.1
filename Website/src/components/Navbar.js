import { Link } from "react-router-dom";

const Navbar = ({ setVal, audio }) => {

    const handleSearch = (e) => {
        setVal(document.getElementById('search-box').value)
    }

    return (
        <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <Link className="active" to="/mashup">Mashup</Link>
            <audio className="audio" controls src={audio}></audio>
            <div className="search-container" >
                <input onChange={handleSearch} id="search-box" type="text" placeholder="Search.." name="search" />
                <Link to="/search" onClick={handleSearch} type="submit">Submit</Link>
            </div>
        </div>

    );
}

export default Navbar;