import { useEffect, useState } from 'react';

export default function VideoPage() {
  const [isPaid, setIsPaid] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/user/status')
      .then((res) => res.json())
      .then((data) => setIsPaid(Boolean(data?.isPaid)))
      .catch(() => setIsPaid(false));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {isPaid ? (
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            src="https://player.vimeo.com/video/PRIVATE_VIDEO_ID"
            className="w-full h-full rounded-lg shadow"
            frameBorder={0}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Paid Video"
          />
        </div>
      ) : (
        <button
          onClick={() => (window.location.href = '/buy')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Buy Video
        </button>
      )}
    </div>
  );
}



