import { songs } from "./songs";
import { SongList } from "./SongList";
import { Player } from "./Player";
import { useAudioPlayer } from "./useAudioPlayer";

export default function App() {
  // Hook centralizes all playback behavior
  const player = useAudioPlayer(songs[0]);

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="alert alert-danger">
        <h4 className="alert-heading">notice!!</h4>
        <p>unfinished site warning</p>
      </div>

      <SongList
        songs={songs}
        currentSong={player.currentSong}
        onSelect={player.setCurrentSong}
      />

      <Player
        song={player.currentSong}
        isPlaying={player.isPlaying}
        progress={player.progress}
        togglePlay={player.togglePlay}
        skip={player.skip}
        seek={player.seek}
        audioRef={player.audioRef}
        onTimeUpdate={player.onTimeUpdate}
        onEnded={() => player.setIsPlaying(false)}
      />
    </div>
  );
}
