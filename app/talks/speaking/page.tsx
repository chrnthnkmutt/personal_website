import { sanityFetch } from "@/lib/sanity.client";
import { TalkType } from "@/types";
import { Slide } from "../../animation/Slide";
import PageHeading from "../../components/shared/PageHeading";
import YoutubeIframe from "../../components/shared/YoutubeIframe";
import Link from "next/link";
import { Metadata } from "next";

// Create the query for talks
const talksQuery = `*[_type == "talk"] | order(date desc, _createdAt desc) {
  _id,
  _createdAt,
  title,
  description,
  event,
  location,
  date,
  type,
  duration,
  audience,
  topics,
  slidesUrl,
  videoUrl,
  youtubeVideoId,
  eventUrl,
  language,
  featured,
  attendees
}`;

export const metadata: Metadata = {
  title: "Speaking & Workshops | Charunthon Limseelo",
  description: "Conference talks, workshops, and training sessions by Charunthon Limseelo on AI, Machine Learning, and Cloud Computing",
  openGraph: {
    title: "Speaking & Workshops | Charunthon Limseelo",
    description: "Conference talks, workshops, and training sessions by Charunthon Limseelo on AI, Machine Learning, and Cloud Computing",
    url: "https://chrnthnkmutt.github.io/talks/speaking",
    siteName: "Charunthon Limseelo",
    locale: "en_US",
    type: "website",
  },
};

export default async function SpeakingPage() {
  const talks: TalkType[] = await sanityFetch({
    query: talksQuery,
    tags: ["talk"],
  });

  // Debug log
  console.log("Talks data:", talks);

  const featuredTalks = talks.filter(talk => talk.featured);
  const otherTalks = talks.filter(talk => !talk.featured);

  const getTalkTypeColor = (type: string) => {
    const colors = {
      conference: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      workshop: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      training: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      keynote: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
      panel: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
      webinar: "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300",
      meetup: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
      lecture: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
    };
    return colors[type as keyof typeof colors] || colors.lecture;
  };

  const getAudienceIcon = (audience: string) => {
    const icons = {
      students: "🎓",
      professionals: "👔",
      researchers: "🔬",
      general: "👥",
      mixed: "🌍",
    };
    return icons[audience as keyof typeof icons] || "👥";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading 
        title="Speaking & Workshops"
        description="Conference talks, workshops, and training sessions I&apos;ve conducted on AI, Machine Learning, Cloud Computing, and Data Engineering."
      />

      {/* Back to Talks Overview */}
      <Slide delay={0.1}>
        <Link 
          href="/talks"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Talks & Publications
        </Link>
      </Slide>

      {talks.length === 0 ? (
        <Slide delay={0.16}>
          <div className="mt-12 p-12 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center">
            <div className="text-6xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-2">No Talks Yet</h3>
            <p className="dark:text-zinc-400 text-zinc-600 mb-4">
              Speaking engagements will appear here once you add them in Sanity Studio.
            </p>
            <Link 
              href="/studio"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Add Talks in Studio
            </Link>
          </div>
        </Slide>
      ) : (
        <>
          {/* Featured Talks */}
          {featuredTalks.length > 0 && (
            <section className="mt-16">
              <Slide delay={0.16}>
                <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Talks & Workshops</h2>
              </Slide>
              
              <div className="space-y-12">
                {featuredTalks.map((talk, index) => (
                  <Slide key={talk._id} delay={0.18 + index * 0.1}>
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                      {/* YouTube Video Embed */}
                      {talk.youtubeVideoId && (
                        <div className="aspect-video">
                          <YoutubeIframe videoId={talk.youtubeVideoId} />
                        </div>
                      )}
                      
                      <div className="p-8">
                        <div className="flex flex-wrap items-start gap-3 mb-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTalkTypeColor(talk.type)}`}>
                            {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
                          </span>
                          {talk.audience && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
                              <span>{getAudienceIcon(talk.audience)}</span>
                              {talk.audience.charAt(0).toUpperCase() + talk.audience.slice(1)}
                            </span>
                          )}
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            {formatDate(talk.date)}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{talk.title}</h3>
                        
                        <div className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                          <span className="font-medium">{talk.event}</span>
                          {talk.location && (
                            <span className="ml-2">• {talk.location}</span>
                          )}
                        </div>
                        
                        {talk.description && (
                          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                            {talk.description}
                          </p>
                        )}
                        
                        {talk.topics && talk.topics.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">Topics Covered:</h4>
                            <div className="flex flex-wrap gap-2">
                              {talk.topics.map((topic, idx) => (
                                <span key={idx} className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                          {talk.duration && (
                            <span>⏱️ {talk.duration} minutes</span>
                          )}
                          {talk.attendees && (
                            <span>👥 ~{talk.attendees} attendees</span>
                          )}
                          {talk.language && talk.language !== 'en' && (
                            <span>🌐 {talk.language === 'th' ? 'Thai' : 'Mixed Languages'}</span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                          {talk.slidesUrl && (
                            <Link 
                              href={talk.slidesUrl}
                              target="_blank"
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                            >
                              View Slides →
                            </Link>
                          )}
                          {talk.videoUrl && !talk.youtubeVideoId && (
                            <Link 
                              href={talk.videoUrl}
                              target="_blank"
                              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                            >
                              Watch Recording →
                            </Link>
                          )}
                          {talk.eventUrl && (
                            <Link 
                              href={talk.eventUrl}
                              target="_blank"
                              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium"
                            >
                              Event Page →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </section>
          )}

          {/* Other Talks */}
          {otherTalks.length > 0 && (
            <section className="mt-16">
              <Slide delay={0.2}>
                <h2 className="text-2xl font-bold tracking-tight mb-8">
                  {featuredTalks.length > 0 ? 'Other Speaking Engagements' : 'All Speaking Engagements'}
                </h2>
              </Slide>
              
              <div className="grid gap-6">
                {otherTalks.map((talk, index) => (
                  <Slide key={talk._id} delay={0.22 + index * 0.05}>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                      <div className="flex flex-wrap items-start gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${getTalkTypeColor(talk.type)}`}>
                          {talk.type}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {formatDate(talk.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{talk.title}</h3>
                      
                      <div className="text-zinc-600 dark:text-zinc-400 mb-2">
                        <span className="font-medium">{talk.event}</span>
                        {talk.location && (
                          <span className="ml-2">• {talk.location}</span>
                        )}
                      </div>
                      
                      {talk.description && (
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                          {talk.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        {talk.slidesUrl && (
                          <Link 
                            href={talk.slidesUrl}
                            target="_blank"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                          >
                            Slides →
                          </Link>
                        )}
                        {talk.videoUrl && (
                          <Link 
                            href={talk.videoUrl}
                            target="_blank"
                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm"
                          >
                            Video →
                          </Link>
                        )}
                        {talk.eventUrl && (
                          <Link 
                            href={talk.eventUrl}
                            target="_blank"
                            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm"
                          >
                            Event →
                          </Link>
                        )}
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}