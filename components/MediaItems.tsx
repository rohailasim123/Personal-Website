interface MediaItem {
    title: string;
    link: string;
    imageUrl: string;
    archiveLink: string;
  }
  
  interface MediaSection {
    title: string;
    link: string;
    items: MediaItem[];
  }
  
  const MediaCard = ({ item }: { item: MediaItem }) => (
    <div className="col-span-1">
      <div className="feature h-full flex flex-col">
        <div className="text-center flex-grow">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-[350px] h-[300px] object-cover border-4 border-black mx-auto"
            />
          </a>
          <small className="block text-right mt-2">
            <a href={item.archiveLink} target="_blank" rel="noopener noreferrer" className="text-sm">
              Archived version
            </a>
          </small>
        </div>
      </div>
    </div>
  );
  
  const MediaRow = ({ items }: { items: MediaItem[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {items.map((item, index) => (
        <MediaCard key={index} item={item} />
      ))}
    </div>
  );
  
  const MediaSection = ({ section }: { section: MediaSection }) => (
    <div className="mb-12">
      <h2 className="feature-title text-center my-6 text-xl font-bold">
        <a href={section.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {section.title}
        </a>
      </h2>
      {chunkArray(section.items, 3).map((rowItems, index) => (
        <MediaRow key={index} items={rowItems} />
      ))}
    </div>
  );
  
  // Helper function to split array into chunks
  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
  const MediaItems = (): JSX.Element => {
    const mediaSections: MediaSection[] = [
      {
        title: "Perception, performance, and detectability of conversational artificial intelligence across 32 university courses",
        link: "https://rdcu.be/dkmtU",
        items: [
          {
            title: "The Daily Beast - ChatGPT surpasses college students in writing homework",
            link: "https://www.thedailybeast.com/openais-chatgpt-surpasses-college-students-in-writing-homework",
            imageUrl: "/images/ChatGPT_dailyBeast.png",
            archiveLink: "https://web.archive.org/web/20230825104852/https://www.thedailybeast.com/openais-chatgpt-surpasses-college-students-in-writing-homework"
          },
          {
            title: "PhysOrg - ChatGPT can outperform university students in assignments",
            link: "https://phys.org/news/2023-08-chatgpt-outperform-university-students-assignments.html",
            imageUrl: "/images/ChatGPT_PhysOrg.png",
            archiveLink: "https://web.archive.org/web/20230825104925/https://phys.org/news/2023-08-chatgpt-outperform-university-students-assignments.html"
          },
          {
            title: "Nature Asia - ChatGPT research highlight",
            link: "https://www.natureasia.com/ja-jp/research/highlight/14624",
            imageUrl: "/images/ChatGPT_natureAsia.png",
            archiveLink: "https://web.archive.org/web/20230825105811/https://www.natureasia.com/ja-jp/research/highlight/14624"
          },
          {
            title: "TS2 - ChatGPT excels at university assignments",
            link: "https://ts2.space/en/chatgpt-excels-at-university-assignments-according-to-study/",
            imageUrl: "/images/ChatGPT_TS2.png",
            archiveLink: "https://web.archive.org/web/20230825102640/https://ts2.space/en/chatgpt-excels-at-university-assignments-according-to-study/"
          },
          {
            title: "New Scientist - ChatGPT gets better marks than students",
            link: "https://www.newscientist.com/article/2388789-chatgpt-gets-better-marks-than-students-in-some-university-courses/",
            imageUrl: "/images/ChatGPT_newScientist.png",
            archiveLink: "https://web.archive.org/web/20230825103543/https://www.newscientist.com/article/2388789-chatgpt-gets-better-marks-than-students-in-some-university-courses/"
          },
          {
            title: "The Times - AI detectors fail when texts are run through online grammar tool",
            link: "https://www.thetimes.co.uk/article/ai-detectors-fail-when-texts-are-run-through-online-grammar-tool-xh5cqtxgp",
            imageUrl: "/images/ChatGPT_theTimes.png",
            archiveLink: "https://web.archive.org/web/20230825103932/https://www.thetimes.co.uk/article/ai-detectors-fail-when-texts-are-run-through-online-grammar-tool-xh5cqtxgp"
          },
          {
            title: "Daily Mail - AI achieve better grades than university students",
            link: "https://www.dailymail.co.uk/sciencetech/article-12443225/AI-achieve-better-grades-university-students-assignments-range-subjects-including-computer-science-political-studies-report-suggests.html",
            imageUrl: "/images/ChatGPT_dailyMail.png",
            archiveLink: "https://web.archive.org/web/20230825101552/https://www.dailymail.co.uk/sciencetech/article-12443225/AI-achieve-better-grades-university-students-assignments-range-subjects-including-computer-science-political-studies-report-suggests.html"
          },
          {
            title: "The National - AI models achieve higher university grades than students",
            link: "https://www.thenationalnews.com/business/technology/2023/08/24/ai-models-achieve-higher-university-grades-than-students/",
            imageUrl: "/images/ChatGPT_theNational.png",
            archiveLink: "https://web.archive.org/web/20230825102026/https://www.thenationalnews.com/business/technology/2023/08/24/ai-models-achieve-higher-university-grades-than-students/"
          },
          {
            title: "EurekAlert - ChatGPT study release",
            link: "https://www.eurekalert.org/news-releases/999191",
            imageUrl: "/images/ChatGPT_EurekAlert.png",
            archiveLink: "https://web.archive.org/web/20230825102350/https://www.eurekalert.org/favicon.ico"
          },
          {
            title: "Independent - ChatGPT research",
            link: "https://www.independent.co.uk/news/uk/politics/chatgpt-research-department-for-education-b2398826.html",
            imageUrl: "/images/ChatGPT_independent.png",
            archiveLink: "https://web.archive.org/web/20230825065146/https://www.independent.co.uk/news/uk/politics/chatgpt-research-department-for-education-b2398826.html"
          },
          {
            title: "Neuroscience News - ChatGPT student writing",
            link: "https://neurosciencenews.com/chatgt-student-writing-23821/",
            imageUrl: "/images/ChatGPT_neuroscience.png",
            archiveLink: "https://web.archive.org/web/20230825064224/https://neurosciencenews.com/chatgt-student-writing-23821/"
          },
          {
            title: "GovTech - ChatGPT can outscore students",
            link: "https://www.govtech.com/education/higher-ed/chatgpt-can-outscore-students-in-some-university-courses",
            imageUrl: "/images/ChatGPT_gt.png",
            archiveLink: "https://web.archive.org/web/20230825063719/https://www.govtech.com/education/higher-ed/chatgpt-can-outscore-students-in-some-university-courses"
          },
          {
            title: "Fagen Wasanni - ChatGPT surpasses university students",
            link: "https://fagenwasanni.com/news/chatgpt-surpasses-university-students-in-writing-assignments-study-reveals/242607/",
            imageUrl: "/images/ChatGPT_FagenWasanni.png",
            archiveLink: "https://web.archive.org/web/20230825064953/https://fagenwasanni.com/news/chatgpt-surpasses-university-students-in-writing-assignments-study-reveals/242607/"
          },
          {
            title: "Nature Middle East - ChatGPT article",
            link: "https://www.natureasia.com/ar/nmiddleeast/article/10.1038/nmiddleeast.2023.154",
            imageUrl: "/images/ChatGPT_natureMiddleEast.png",
            archiveLink: "https://web.archive.org/web/20230914073958/https://www.natureasia.com/ar/nmiddleeast/article/10.1038/nmiddleeast.2023.154"
          },
          {
            title: "The Decoder - ChatGPT scores equal to or better than students",
            link: "https://the-decoder.com/chatgpt-scores-equal-to-or-better-than-students-in-9-out-of-32-university-courses/",
            imageUrl: "/images/ChatGPT_theDecoder.png",
            archiveLink: "https://web.archive.org/web/20230914074335/https://the-decoder.com/chatgpt-scores-equal-to-or-better-than-students-in-9-out-of-32-university-courses/"
          }
        ]
      },
      {
        title: "Towards a World Wide Web without digital inequality",
        link: "https://www.pnas.org/doi/10.1073/pnas.2212649120",
        items: [
          {
            title: "Nature Middle East - LiteWeb article",
            link: "https://jwp-nme.public.springernature.app/en/nmiddleeast/article/10.1038/nmiddleeast.2023.3",
            imageUrl: "/images/LiteWeb_NatureMiddleEast.png",
            archiveLink: "https://web.archive.org/web/20230823093105/https://jwp-nme.public.springernature.app/en/nmiddleeast/article/10.1038/nmiddleeast.2023.3"
          }
        ]
      }
    ];
  
    return (
        <section className="container mx-auto px-4 py-8" id="media">
          {mediaSections.map((section, index) => (
            <MediaSection key={index} section={section} />
          ))}
        </section>
      );
  };
  
  export default MediaItems;