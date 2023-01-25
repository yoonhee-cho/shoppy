import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ title, channelId}) {
    const { youtube } = useYoutubeApi();
    const { data: channelImgURL } = useQuery(
        ['channel', channelId], 
        () => youtube.channelImgURL(channelId),
        { staleTime: 1000 * 60 * 5 }
    );

    return (
        <div className='flex my-4 mb-8 items-center'>
            {channelImgURL && <img className='rounded-full w-10 h-10' src={channelImgURL} alt="imgurl" /> }
            <p className='text-lg font-medium ml-2'>{title}</p>
        </div>
    );
}

