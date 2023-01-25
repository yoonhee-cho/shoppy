import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ videoId }) {
    const { youtube } = useYoutubeApi();
    const { 
        isLoading, 
        error, 
        data: relatedVideos
    } = useQuery(['relatedVideos', videoId], () => youtube.relatedVideos(videoId), { staleTime: 1000 * 60 * 5 });

    return (
        <div>     
            {isLoading && <p>Loading..</p>}
            {error && <p>error</p>}
            {relatedVideos && 
            <ul className='basis-1/4 mx-4'> 
                {relatedVideos.map((item) => <VideoCard key={item.id} video={item} type='list'/>)}
            </ul>
            }
        </div>
    );
}

