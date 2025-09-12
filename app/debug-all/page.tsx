import { sanityFetch } from "@/lib/sanity.client";
import DebugActions from "./DebugActions";

interface DebugTalk {
  _id: string;
  title: string;
  event: string;
  date: string;
  featured: boolean;
  _createdAt: string;
}

interface DebugPublication {
  _id: string;
  title: string;
  journal: string;
  year: number;
  featured: boolean;
  _createdAt: string;
}

interface DebugHeroe {
  _id: string;
  name: string;
  imageUrl?: string;
  url?: string;
  met: boolean;
  _createdAt: string;
}

export default async function DebugAllPage() {
  try {
    // Fetch all content types
    const talks: DebugTalk[] = await sanityFetch({
      query: `*[_type == "talk"] {
        _id,
        title,
        event,
        date,
        featured,
        _createdAt
      }`,
      tags: ["talk"],
    });

    const publications: DebugPublication[] = await sanityFetch({
      query: `*[_type == "publication"] {
        _id,
        title,
        journal,
        year,
        featured,
        _createdAt
      }`,
      tags: ["publication"],
    });

    const heroes: DebugHeroe[] = await sanityFetch({
      query: `*[_type == "heroe"] {
        _id,
        name,
        imageUrl,
        url,
        met,
        _createdAt
      }`,
      tags: ["heroe"],
    });

    return (
      <div className="max-w-6xl mx-auto p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Complete Database Debug</h1>
          <div className="flex gap-3">
            <a
              href="/webhook-setup"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ⚡ Setup Instant Updates
            </a>
            <DebugActions />
          </div>
        </div>
        
        {/* Talks Section */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Talks ({talks.length})
          </h2>
          {talks.length === 0 ? (
            <p className="text-gray-500">No talks found</p>
          ) : (
            <div className="space-y-3">
              {talks.map((item: DebugTalk) => (
                <div key={item._id} className="bg-blue-50 p-3 rounded">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">Event: {item.event}</p>
                  <p className="text-sm text-gray-600">Date: {item.date}</p>
                  <p className="text-sm text-gray-600">Featured: {item.featured ? 'Yes' : 'No'}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Publications Section */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            Publications ({publications.length})
          </h2>
          {publications.length === 0 ? (
            <p className="text-gray-500">No publications found</p>
          ) : (
            <div className="space-y-3">
              {publications.map((item: DebugPublication) => (
                <div key={item._id} className="bg-green-50 p-3 rounded">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">Journal: {item.journal}</p>
                  <p className="text-sm text-gray-600">Year: {item.year}</p>
                  <p className="text-sm text-gray-600">Featured: {item.featured ? 'Yes' : 'No'}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Friends & Collaborators Section */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Friends & Collaborators ({heroes.length})
          </h2>
          {heroes.length === 0 ? (
            <p className="text-gray-500">No friends/collaborators found</p>
          ) : (
            <div className="space-y-3">
              {heroes.map((item: DebugHeroe) => (
                <div key={item._id} className="bg-purple-50 p-3 rounded">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">URL: {item.url || 'None'}</p>
                  <p className="text-sm text-gray-600">Met: {item.met ? 'Yes' : 'No'}</p>
                  <p className="text-sm text-gray-600">Image: {item.imageUrl ? 'Yes' : 'No'}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className="border rounded-lg p-6 bg-yellow-50">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">
            Search for &quot;Wasin&quot;
          </h2>
          <div className="space-y-2">
            {[...talks, ...publications, ...heroes]
              .filter((item: any) => 
                JSON.stringify(item).toLowerCase().includes('wasin')
              )
              .map((item: any, index: number) => (
                <div key={index} className="bg-yellow-100 p-3 rounded">
                  <p className="font-semibold">Found in: {item._type || 'unknown'}</p>
                  <pre className="text-xs bg-white p-2 rounded mt-2 overflow-auto">
                    {JSON.stringify(item, null, 2)}
                  </pre>
                </div>
              ))
            }
            {![...talks, ...publications, ...heroes]
              .some((item: any) => 
                JSON.stringify(item).toLowerCase().includes('wasin')
              ) && (
              <p className="text-gray-500">No entries containing &quot;Wasin&quot; found</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error Loading Data</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error: {String(error)}</p>
        </div>
      </div>
    );
  }
}