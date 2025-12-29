import type { Song } from "./songs";

type Props = {
  songs: Song[];
  currentSong: Song;
  onSelect: (song: Song) => void;
};

/**
 * Stateless component:
 * Receives data via props, emits events via callbacks
 */
export function SongList({ songs, currentSong, onSelect }: Props) {
  return (
    <div className="song-list p-3">
      {songs.map((song) => (
        <div
          key={song.id}
          className={`song-row ${
            song.id === currentSong.id ? "active" : ""
          }`}
          onClick={() => onSelect(song)}
        >
          <div className="d-flex justify-content-between">
            <span>{song.title}</span>
            <span className="runtime">wav</span>
          </div>

          <div className="timeline">
            <div className="timeline-fill" />
          </div>

          <div className="play-hover">▶</div>
        </div>
      ))}
    </div>
  );
}
