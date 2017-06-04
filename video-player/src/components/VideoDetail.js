import React from 'react'


const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    // const playerOptions = {
    //     fs : 1,
    //
    // };
    // let optionsString = '';
    const title = video.snippet.title;
    const description = video.snippet.description;


    // for (const key in playerOptions) {
    //     if (optionsString != "") {
    //         optionsString += "&";
    //     }
    //     optionsString += key + "=" + encodeURIComponent(playerOptions.key);
    //
    // }

    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={url}
                    allowFullScreen={true}
                />

            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
};

export default VideoDetail