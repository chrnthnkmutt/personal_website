import Image from "next/image";
import Link from "next/link";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import InstagramProfile from "../components/shared/InstagramProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks & Publications | Charunthon Limseelo",
  description: "Conference talks, workshops, publications, and media appearances by Charunthon Limseelo",
  openGraph: {
    title: "Talks & Publications | Charunthon Limseelo",
    description: "Conference talks, workshops, publications, and media appearances by Charunthon Limseelo",
    url: "https://boatchrnthn.vercel.app/talks",
    siteName: "Charunthon Limseelo",
    locale: "en_US",
    type: "website",
    images: "/OpenGraph.png",
  },
  twitter: {
    title: "Talks & Publications | Charunthon Limseelo",
    description: "Conference talks, workshops, publications, and media appearances by Charunthon Limseelo",
  },
};

export default function TalksPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading 
        title="Talks & Publications"
        description="My research contributions, speaking engagements, workshops, and media appearances in AI, Data Science, and Cloud Computing."
      />

      {/* Publications Section */}
      <section className="mt-32">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Publications</h2>
            <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
              Research papers, articles, and academic contributions in Natural Language Processing, 
              AI, and Data Science.
            </p>
          </div>
        </Slide>

        <Slide delay={0.18}>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Research Publications</h3>
                  <p className="dark:text-zinc-400 text-zinc-600">
                    Academic papers and research contributions
                  </p>
                </div>
              </div>
              <Link 
                href="/talks/publications"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                View All Publications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="text-sm dark:text-zinc-400 text-zinc-600">
              Browse my research papers, journal articles, conference proceedings, and other academic contributions 
              in the fields of Natural Language Processing, Machine Learning, and AI.
            </p>
          </div>
        </Slide>
      </section>

      {/* Conference Talks & Workshops Section */}
      <section className="mt-32">
        <Slide delay={0.20}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Speaking & Workshops</h2>
            <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
              Conference talks, workshops, and training sessions on 
              AI, Machine Learning, Cloud Computing, and Data Engineering.
            </p>
          </div>
        </Slide>

        <Slide delay={0.22}>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎤</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Conference Talks & Workshops</h3>
                  <p className="dark:text-zinc-400 text-zinc-600">
                    Speaking engagements and training sessions
                  </p>
                </div>
              </div>
              <Link 
                href="/talks/speaking"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                View All Talks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="text-sm dark:text-zinc-400 text-zinc-600">
              Explore my speaking engagements, workshops, and training sessions where I share insights on 
              AI technologies, cloud computing, and emerging tech trends with diverse audiences.
            </p>
          </div>
        </Slide>
      </section>

      {/* Media Appearances & Instagram Section */}
      <section className="mt-32">
        <Slide delay={0.24}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Media Appearances</h2>
            <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
              Featured content, interviews, and social media highlights showcasing 
              my work and insights in technology and AI.
            </p>
          </div>
        </Slide>

        <Slide delay={0.26}>
          <div className="space-y-8">
            {/* Instagram Profile Component */}
            <InstagramProfile username="boatchrnthn" />

            {/* Other Media Appearances Placeholder */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-xl font-semibold mb-2">Other Media Features</h3>
              <p className="dark:text-zinc-400 text-zinc-600">
                Podcast appearances, interviews, and media features will be showcased here.
              </p>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}