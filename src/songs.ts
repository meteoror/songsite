export interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
  cover: string;
  description: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Glass Echo",
    artist: "tr1stan",
    src: "/audio/01.wav",
    cover: "/covers/cover1.jpg",
    description: "A slow-building ambient piece."
  },
  {
    id: 2,
    title: "Static Youth",
    artist: "tr1stan",
    src: "/audio/02.wav",
    cover: "/covers/cover2.jpg",
    description: "Minimal and distorted."
  },
  {
    id: 3,
    title: "Dead Channel",
    artist: "tr1stan",
    src: "/audio/03.wav",
    cover: "/covers/cover3.jpg",
    description: "Cold digital noise textures."
  },
  {
    id: 4,
    title: "Afterimage",
    artist: "tr1stan",
    src: "/audio/04.wav",
    cover: "/covers/cover4.jpg",
    description: "Soft melodies with decay."
  },
  {
    id: 5,
    title: "Night Bus",
    artist: "tr1stan",
    src: "/audio/05.wav",
    cover: "/covers/cover5.jpg",
    description: "Late-night motion and hum."
  },
  {
    id: 6,
    title: "Flicker",
    artist: "tr1stan",
    src: "/audio/06.wav",
    cover: "/covers/cover6.jpg",
    description: "Short, sharp, and unstable."
  }
];
