import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function CustomPlayer({ video }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video bg-black rounded-2xl overflow-hidden">
      <ReactPlayer
        ref={playerRef}
        src={video.url}
        playing={playing}
        muted={muted}
        onProgress={(state) => setProgress(state.played)}
        width="100%"
        height="100%"
        
       
      />

      {/* زر التشغيل */}
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute inset-0 flex items-center justify-center bg-black/30"
      >
        {playing ? (
          <Pause className="w-14 h-14 text-white" />
        ) : (
          <Play className="w-14 h-14 text-white" />
        )}
      </button>

      {/* شريط التقدم */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
        <div
          className="h-full bg-[#9C6FFF]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* كتم الصوت */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute top-4 right-4 bg-white/20 rounded-full p-2"
      >
        {muted ? (
          <VolumeX className="text-white" />
        ) : (
          <Volume2 className="text-white" />
        )}
      </button>
    </div>
  );
}
