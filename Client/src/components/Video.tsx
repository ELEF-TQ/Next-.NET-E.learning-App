
interface VideoProps {
  url?: string; // Make the 'url' property optional
}

const Video: React.FC<VideoProps> = ({ url }) => {
  // Check if 'url' is defined before rendering the iframe
  if (!url) {
    return null; // Or you can render a placeholder or handle it in a different way
  }

  return (
    <div className="video-container flex items-center justify-center">
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
