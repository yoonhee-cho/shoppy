import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideosList() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { 
    isLoading, 
    error, 
    data: videos 
  } = useQuery(['videos', keyword], () => youtube.search(keyword), { staleTime: 1000 * 60 * 1 });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && 
        <ul className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}/>
          ))}
        </ul>
      }
    </>
  )
}
