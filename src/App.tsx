import { songs } from "./songs";
import { SongList } from "./SongList";
import { Player } from "./Player";
import { useAudioPlayer } from "./useAudioPlayer";

export default function App() {
  // Hook centralizes all playback behavior
  const player = useAudioPlayer(songs[0]);

  return (
    <div className="vh-100 d-flex flex-column p-3">
      <div style={{ flex: 1 }}>
        <div className="alert alert-danger h-100 mb-0">
          <h4 className="alert-heading">notice!!</h4>
          <p>if you somehow got here due to seo being kind to me, this website is heavily unfinished currently, sorry.</p>
          <p>talk to me on discord @91ninevolt instead!</p>
        </div>
      </div>

      <div style={{ flex: 9 }} className="d-flex">
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
    </div>
  );
}
