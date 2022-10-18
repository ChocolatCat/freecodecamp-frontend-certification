import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

const audioSources = [
    {
        key: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        desc: 'Heater 1'
    },
    {
        key: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        desc: 'Heater 2'
    },
    {
        key: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        desc: 'Heater 3'
    },
    {
        key: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        desc: 'Heater 4'
    },
    {
        key: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        desc: 'Clap'
    },
    {
        key: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        desc: 'Open HH'
    },
    {
        key: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        desc: 'Kick \'n Hat'
    },
    {
        key: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        desc: 'Kick'
    },
    {
        key: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        desc: 'Closed HH'
    }
];

function App() {
    
    const handleKeyDown = (e) => {
        const audioSource = audioSources.find((a) => a.key === e.key.toUpperCase());
        if(audioSource){
            let audio = document.getElementById(audioSource.key);
            audio.play();
            document.getElementById('display').innerText = audioSource.desc;
        }
    };

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    const handleOnClick = (key, desc) => {
        let audio = document.getElementById(key);
        audio.play();
        document.getElementById('display').innerText = desc;
    };

    return (
        <div className="App">
            <div id='drum-machine'>
                <div>
                    <p id='display'></p>
                </div>
                {audioSources.map((audio) => {
                    return (
                        <div className="drum-pad" 
                        key={audio.key} 
                        id={audio.desc} 
                        onClick={() => handleOnClick(audio.key, audio.desc)}
                        >
                            <audio className="clip" id={audio.key} src={audio.src}></audio>
                            {audio.key}
                        </div>
                    );
                })}
                
            </div>
        </div>
    );
}

export default App;
