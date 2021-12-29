import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import '../static/css/search.css'

const Search = ({ setAudio, valu }) => {
    var { data, isPending, error } = useFetch(`https://Music.sh1ft3r.repl.co/info/${valu}`)
    if (error) {
        data = null
    }

    return (
        <div className="search">
            {error && <h1>Oh No! An Error! Check Your input!</h1>}
            {isPending && <h3>Loading...</h3>}
            {data && (
                <div className="root">
                    {data.map((o) => (
                        <div>
                            <Link to={`/play/${o.name}`} >
                                <div className="element" >
                                    { o.name }
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;