import Link from 'next/link';

interface MediaPreviewItem {
  title: string;
  imageUrl: string;
  source: string;
  articleUrl: string;
}

const MediaCoveragePreview = () => {
  const previewItems: MediaPreviewItem[] = [
    {
      title: "ChatGPT outperforms university students in assignments",
      imageUrl: "/images/ChatGPT_PhysOrg.png",
      source: "Phys.org",
      articleUrl: "https://phys.org/news/2023-08-chatgpt-outperform-university-students-assignments.html"
    },
    {
      title: "AI achieves better grades than students",
      imageUrl: "/images/ChatGPT_dailyMail.png",
      source: "Daily Mail",
      articleUrl: "https://www.dailymail.co.uk/sciencetech/article-12443225/AI-achieve-better-grades-university-students-assignments-range-subjects-including-computer-science-political-studies-report-suggests.html"
    },
    {
      title: "ChatGPT gets better marks than students",
      imageUrl: "/images/ChatGPT_newScientist.png",
      source: "New Scientist",
      articleUrl: "https://www.newscientist.com/article/2388789-chatgpt-gets-better-marks-than-students-in-some-university-courses/"
    },
    {
        title: "ChatGPT surpasses students in writing assignments",
        imageUrl: "/images/ChatGPT_theDecoder.png",
        source: "The Decoder",
        articleUrl: "https://the-decoder.com/chatgpt-scores-equal-to-or-better-than-students-in-9-out-of-32-university-courses/"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Media Coverage
        </h2>
        <Link href="/media" className="text-blue-600 hover:underline text-sm font-medium">
          View all coverage →
        </Link>
      </div>
      
      <p className="text-gray-600 mb-6">
        Major media outlets worldwide that have featured my research at NYU include 
        The Times, Nature, New Scientist, and more.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewItems.map((item, index) => (
          <a 
            key={index} 
            href={item.articleUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-[7/8] overflow-hidden rounded-lg bg-white border border-gray-200">
              <img
                src={item.imageUrl}
                alt={`${item.source} coverage: ${item.title}`}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                <div>
                  <p className="text-white text-xs font-medium">{item.source}</p>
                  <p className="text-white text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/media" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          See All Media Coverage
        </Link>
      </div>
    </div>
  );
};

export default MediaCoveragePreview;