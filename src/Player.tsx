import type { Song } from "./songs";

type Props = {
  song: Song;
  isPlaying: boolean;
  progress: number;
  togglePlay: () => void;
  skip: (seconds: number) => void;
  seek: (e: React.MouseEvent<HTMLDivElement>) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onTimeUpdate: () => void;
  onEnded: () => void;
};

/**
 * Player UI:
 * Knows nothing about where data comes from
 */
export function Player({
  song,
  isPlaying,
  // progress,
  togglePlay,
  skip,
  // seek,
  audioRef,
  onTimeUpdate,
  onEnded,
}: Props) {
  return (
    <div className="player-view d-flex flex-column align-items-center text-center flex-grow-1 p-5">
      <img src={song.cover} className="cover mb-4" />
      <h2>{song.title}</h2>
      <h5 className="text-muted">{song.artist}</h5>

      <p className="mt-3">{song.description}</p>

      <div className="controls mt-4">
        <button onClick={() => skip(-15)}>
          <i className="fa-solid fa-backward"></i>
        </button>

        <button onClick={togglePlay}>
          {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </button>

        <button onClick={() => skip(15)}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>

      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
}
