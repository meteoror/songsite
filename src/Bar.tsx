type ProgressBarProps = {
  progress: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export function ProgressBar({ progress, onSeek }: ProgressBarProps) {
  return (
    <div className="progress-bar mt-3" onClick={onSeek}>
      <div style={{ width: `${progress}%` }} />
    </div>
  );
}
