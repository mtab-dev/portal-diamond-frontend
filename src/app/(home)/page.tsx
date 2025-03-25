"use client";

import VideoCard from "@/components/home/video-card/video-card";
import Header from "@/components/shared/header/header";
import { IVideo } from "@/constants/types";
import { getAllVideos } from "@/services/queries/video.query";
import { useEffect, useState } from "react";

export default function UploadPage() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const response = await getAllVideos();
      const vidArray = Array.isArray(response) ? response : [];
      setVideos(vidArray);
      setLoading(false);
    };

    fetchVideos();
  }, []);

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col items-center overflow-x-hidden">
      <div className="h-fit w-screen sticky z-50 top-0">
        <Header />
      </div>

      <div className="w-full max-w-[1200px] p-4">
        {loading ? (
          <p className="text-center text-lg">Carregando vídeos...</p>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">Nenhum vídeo encontrado.</p>
        )}
      </div>
    </div>
  );
}
