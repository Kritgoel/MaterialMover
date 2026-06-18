import { useRef, forwardRef, useImperativeHandle } from 'react';

const WasteScene = forwardRef(function WasteScene(props, ref) {
  const sceneRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getScene: () => sceneRef.current,
    getVideo: () => videoRef.current,
    getContent: () => contentRef.current,
    playVideo: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  }));

  return (
    <div ref={sceneRef} id="waste-scene">
      <video ref={videoRef} id="waste-video" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dhrfsbrmc/video/upload/v1770896141/waste-video_s119r7.mp4" type="video/mp4" />
      </video>
      <div className="waste-overlay">
        <div ref={contentRef} className="waste-content">
          <h2 className="waste-title">The Hidden Cost</h2>
          <p className="waste-text">
            Construction waste: <strong>40%</strong> of global landfill.
          </p>
        </div>
      </div>
    </div>
  );
});

export default WasteScene;

