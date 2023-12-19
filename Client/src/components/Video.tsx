
interface VideoProps {
  url?: string; 
}

const Video: React.FC<VideoProps> = ({ url }) => {
  if (!url) {
    return null; 
  }

  return (
    <div className="video-container flex items-center  justify-center">
      <iframe
      className="rounded-3xl"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
