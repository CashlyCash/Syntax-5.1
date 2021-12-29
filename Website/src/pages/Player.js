import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../static/css/player.css'

const Play = ({ setAudio, songs, setsongs}) => {
    const history = useHistory()
    const { name } = useParams()

    const { data, isPending, error } = useFetch(`https://Music.sh1ft3r.repl.co/id/${name}`)

    const handleClick = () => {
        setAudio(data.audio)
    }

    const handleMashup = () => {
        if(songs[0] === ""){
            setsongs[0](name)
        } else if (songs[1] === ""){
            setsongs[1](name)
        } else {
            history.push('/mashup')
        }
    }

    return (
        <div>
            {error && (
                <div>
                    <h1>Oh No! An Error!</h1>
                    <h2>{error}</h2>
                </div>
            )}
            {isPending && <h3>Loading...</h3>}
            {data && (
                <div className="player">
                    <center>
                    <img alt="" className="thumbnail" src={data.info.thumbnails[0]} />
                    <br />
                    <button className='btn' onClick={handleClick}>Play Now!</button>
                    <button className='btn' onClick={handleMashup}>Add to mapshup</button>
                    </center>
                </div>
            )}
        </div>

    );
}

export default Play;