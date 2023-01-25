import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function Video() {
    const { videoId } = useParams();
    
    const { state: { video }} = useLocation();
    const { channelId, channelTitle, description, title } = video.snippet;

    return (
        <section className='flex flex-col lg:flex-row'>
            <article className='basis-4/6'>
                <iframe 
                    id="player" 
                    type="text/html" 
                    width="100%" 
                    height="640"
                    src={`https://www.youtube.com/embed/${videoId}`} 
                    frameBorder="0"
                    title={title}>
                </iframe>

                <div className='p-8'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <ChannelInfo title={channelTitle} channelId={channelId}/>
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                </div>
            </article>
            
            <section className='basis-2/6'>
                <RelatedVideos videoId={videoId} />
            </section>
        </section>
    );
}



  
