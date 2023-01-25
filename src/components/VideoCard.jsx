import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
    const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/videos/watch/${id}`, { state: { video }});
    }

    const isList = type === 'list';

    return (
        <li 
            className={isList? 'flex gap-1 mb-4' : ''}
            alt={title} 
            onClick={()=>handleClick(video.id)}>
            <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} />
            <div>
                <p className="text-sm font-semibold line-clamp-2 my-1 text-white">{title}</p>
                <p className="text-sm opacity-80 text-neutral-400">{channelTitle}</p>
                <p className="text-sm opacity-80 text-neutral-400">{moment(publishedAt).fromNow()}</p>
            </div>  
        </li>
    );
}

