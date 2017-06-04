import React from 'react'


const VideoLIstItem = ({video, onVideoSelect}) => {
    // (props)
    // const video = props.video;
    // identical to
    // ({ video })

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li
            className="list-group-item"
            onClick={()=>onVideoSelect(video)}
        >
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-right">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>

            </div>
        </li>
    );
};


export default VideoLIstItem;
