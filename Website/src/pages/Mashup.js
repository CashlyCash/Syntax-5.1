import useFetch from "../hooks/useFetch"

const Mashup = ({ songs }) => {
    var [song1, song2] = songs
    const { data: data1, isPending: loading1, error: error1 } = useFetch(`https://Music.sh1ft3r.repl.co/id/${song1}`)
    const { data: data2, isPending: loading2, error: error2 } = useFetch(`https://Music.sh1ft3r.repl.co/id/${song2}`)

    var handleChange = (e) => {
        const slider = e.target
        const value = slider.value
        document.getElementsByClassName('m-a')[1].volume = value / 100
        document.getElementsByClassName('m-a')[0].volume = [100 - value] / 100
    }

    var handleClick = (e) => {

        const a1 = document.getElementsByClassName('m-a')[0]

        if (a1.paused && a1.currentTime > 0 && !a1.ended) {
            a1.play();
        } else {
            a1.pause();
        }

        const a2 = document.getElementsByClassName('m-a')[1]

        if (a2.paused && a2.currentTime > 0 && !a2.ended) {
            a2.play();
        } else {
            a2.pause();
        }


    }

    return (
        <div>
            <div class="row">
                <div class="column">
                    {error1 && (
                        <div>
                            <h1>Looks Like you havn't added a song here</h1>
                        </div>
                    )}
                    {loading1 && <h3>Loading...</h3>}
                    {data1 && (
                        <div className="music1">
                            <img alt="" src={data1.info.thumbnails[0]} />
                            <audio className="m-a" controls src={data1.audio} />
                        </div>
                    )}
                </div>
                <div class="column">
                    {error2 && (
                        <div>
                            <h1>Looks Like you havn't added a song here</h1>
                        </div>
                    )}
                    {loading2 && <h3>Loading...</h3>}
                    {data2 && (
                        <div className="music2">
                            <img alt="" src={data2.info.thumbnails[0]} />
                            <audio className="m-a" controls src={data2.audio} />
                        </div>
                    )}
                </div>
            </div>
            <div className="row">
                <center>
                    <input onChange={handleChange} className="slider" type="range" min="1" max="100" ></input><br />
                    <button onClick={handleClick} className="play">Play!</button>
                    <p>
                        To make the big play button work, manually play both of them. We need to do this because of google security policy.<br />
                        To reset songs, Reload the webpage.
                    </p>
                </center>

            </div>
        </div>
    );
}

export default Mashup;
