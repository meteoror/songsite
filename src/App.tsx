import { songs } from "./songs";
import { SongList } from "./SongList";
import { Player } from "./Player";
import { useAudioPlayer } from "./useAudioPlayer";
import { ProgressBar } from "./Bar";

export default function App() {
  const player = useAudioPlayer(songs[0]);

  return (
    <div className="vh-100 d-flex flex-column p-3">
      {/* notice */}
      <div className="flex-shrink-0">
        <div className="alert alert-danger mb-3">
          <p>no album covers im So Sorry use your imagination</p>
        </div>
      </div>

      {/* main */}
      <div className="flex-grow-1 d-flex flex-column flex-md-row overflow-hidden">
        <div className="flex-md-grow-1 overflow-auto">
          <SongList
            songs={songs}
            currentSong={player.currentSong}
            onSelect={player.setCurrentSong}
          />
        </div>

        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
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

      {/* bar */}
      <div className="mt-3 mb-2 px-2">
        <ProgressBar
          progress={player.progress}
          onSeek={player.seek}
        />
      </div>
    </div>

  );
}
