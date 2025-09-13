import { sanityFetch } from "@/lib/sanity.client";
import { PublicationType } from "@/types";
import { Slide } from "../../animation/Slide";
import PageHeading from "../../components/shared/PageHeading";
import Link from "next/link";
import { Metadata } from "next";

// Create the query for publications
const publicationsQuery = `*[_type == "publication"] | order(year desc, _createdAt desc) {
  _id,
  _createdAt,
  title,
  authors,
  journal,
  year,
  abstract,
  keywords,
  doi,
  pdfUrl,
  externalUrl,
  type,
  status,
  featured
}`;

export const metadata: Metadata = {
  title: "Publications | Charunthon Limseelo",
  description: "Research papers, articles, and academic contributions in NLP, AI, and Data Science by Charunthon Limseelo",
  openGraph: {
    title: "Publications | Charunthon Limseelo",
    description: "Research papers, articles, and academic contributions in NLP, AI, and Data Science by Charunthon Limseelo",
    url: "https://boatchrnthn.vercel.app/talks/publications",
    siteName: "Charunthon Limseelo",
    locale: "en_US",
    type: "website",
    images: "/OpenGraph.png",
  },
};

export default async function PublicationsPage() {
  const publications: PublicationType[] = await sanityFetch({
    query: publicationsQuery,
    tags: ["publication"],
  });

  // Debug log
  console.log("Publications data:", publications);

  const featuredPublications = publications.filter(pub => pub.featured);
  const otherPublications = publications.filter(pub => !pub.featured);

  const getPublicationTypeColor = (type: string) => {
    const colors = {
      journal: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      conference: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300", 
      workshop: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      thesis: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
      preprint: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
      chapter: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
      report: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
    };
    return colors[type as keyof typeof colors] || colors.report;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      published: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      inpress: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      review: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
      draft: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
    };
    return colors[status as keyof typeof colors] || colors.draft;
  };

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading 
        title="Publications"
        description="Research papers, articles, and academic contributions in Natural Language Processing, AI, and Data Science."
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

      {publications.length === 0 ? (
        <Slide delay={0.16}>
          <div className="mt-12 p-12 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No Publications Yet</h3>
            <p className="dark:text-zinc-400 text-zinc-600 mb-4">
              Publications will appear here once you add them in Sanity Studio.
            </p>
            <Link 
              href="/studio"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Add Publications in Studio
            </Link>
          </div>
        </Slide>
      ) : (
        <>
          {/* Featured Publications */}
          {featuredPublications.length > 0 && (
            <section className="mt-16">
              <Slide delay={0.16}>
                <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Publications</h2>
              </Slide>
              
              <div className="space-y-8">
                {featuredPublications.map((publication, index) => (
                  <Slide key={publication._id} delay={0.18 + index * 0.1}>
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPublicationTypeColor(publication.type)}`}>
                          {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                        </span>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(publication.status)}`}>
                          {publication.status === 'inpress' ? 'In Press' : publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {publication.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{publication.title}</h3>
                      
                      {publication.authors && publication.authors.length > 0 && (
                        <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                          {publication.authors.join(', ')}
                        </p>
                      )}
                      
                      {publication.journal && (
                        <p className="text-zinc-600 dark:text-zinc-400 mb-3 italic">
                          {publication.journal}
                        </p>
                      )}
                      
                      {publication.abstract && (
                        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                          {publication.abstract}
                        </p>
                      )}
                      
                      {publication.keywords && publication.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {publication.keywords.map((keyword, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        {publication.doi && (
                          <Link 
                            href={publication.doi}
                            target="_blank"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                          >
                            DOI →
                          </Link>
                        )}
                        {publication.pdfUrl && (
                          <Link 
                            href={publication.pdfUrl}
                            target="_blank"
                            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium"
                          >
                            PDF →
                          </Link>
                        )}
                        {publication.externalUrl && (
                          <Link 
                            href={publication.externalUrl}
                            target="_blank"
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium"
                          >
                            View Online →
                          </Link>
                        )}
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </section>
          )}

          {/* Other Publications */}
          {otherPublications.length > 0 && (
            <section className="mt-16">
              <Slide delay={0.2}>
                <h2 className="text-2xl font-bold tracking-tight mb-8">
                  {featuredPublications.length > 0 ? 'Other Publications' : 'All Publications'}
                </h2>
              </Slide>
              
              <div className="grid gap-6">
                {otherPublications.map((publication, index) => (
                  <Slide key={publication._id} delay={0.22 + index * 0.05}>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                      <div className="flex flex-wrap items-start gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${getPublicationTypeColor(publication.type)}`}>
                          {publication.type}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {publication.year}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
                      
                      {publication.authors && publication.authors.length > 0 && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                          {publication.authors.join(', ')}
                        </p>
                      )}
                      
                      {publication.journal && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 italic">
                          {publication.journal}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        {publication.doi && (
                          <Link 
                            href={publication.doi}
                            target="_blank"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                          >
                            DOI →
                          </Link>
                        )}
                        {publication.pdfUrl && (
                          <Link 
                            href={publication.pdfUrl}
                            target="_blank"
                            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm"
                          >
                            PDF →
                          </Link>
                        )}
                        {publication.externalUrl && (
                          <Link 
                            href={publication.externalUrl}
                            target="_blank"
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm"
                          >
                            View →
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