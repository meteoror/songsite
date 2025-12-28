import { useEffect, useRef, useState } from "react";
import { songs, type Song } from "./songs";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    setIsPlaying(false);
    setProgress(0);
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    setProgress((a.currentTime / a.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    if (!audioRef.current) return;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += seconds;
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">notice!!</h4>
        <p>if you somehow got here due to seo being kind to me, this website is heavily unfinished currently, sorry. talk to me on discord @91ninevolt instead!</p>
      </div>
      {/* LEFT PANEL */}
      <div className="song-list p-3">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`song-row ${song.id === currentSong.id ? "active" : ""}`}
            onClick={() => setCurrentSong(song)}
          >
            <div className="d-flex justify-content-between">
              <span>{song.title}</span>
              <span className="runtime">wav</span> {/* ASSUMPTION */}
            </div>
            <div className="timeline">
              <div className="timeline-fill" />
            </div>
            <div className="play-hover">▶</div>
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="player-view flex-grow-1 p-5">
        <img src={currentSong.cover} className="cover mb-4" />
        <h2>{currentSong.title}</h2>
        <h5 className="text-muted">{currentSong.artist}</h5>

        <p className="mt-3">{currentSong.description}</p>

        <div className="controls mt-4">
          <button onClick={() => skip(-10)}>⏮</button>
          <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
          <button onClick={() => skip(10)}>⏭</button>
        </div>

        <div className="progress-bar mt-3" onClick={seek}>
          <div style={{ width: `${progress}%` }} />
        </div>

        <audio
          ref={audioRef}
          src={currentSong.src}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
}
