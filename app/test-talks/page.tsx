import { sanityFetch } from "@/lib/sanity.client";

interface TestTalk {
  _id: string;
  _createdAt: string;
  title: string;
  event: string;
  date: string;
  type: string;
  featured: boolean;
}

const testQuery = `*[_type == "talk"] {
  _id,
  _createdAt,
  title,
  event,
  date,
  type,
  featured
}`;

export default async function TestTalksPage() {
  try {
    const talks: TestTalk[] = await sanityFetch({
      query: testQuery,
      tags: ["talk"],
    });

    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Talks Debug Page</h1>
        <div className="mb-4">
          <strong>Total talks found: {talks.length}</strong>
        </div>
        
        {talks.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">No talks found in the database.</p>
            <p className="text-sm text-yellow-600 mt-2">
              Make sure you have:
              <br />
              1. Added talks in Sanity Studio
              <br />
              2. Published them (not just saved as draft)
              <br />
              3. Set the document type as &quot;talk&quot;
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {talks.map((talk: TestTalk) => (
              <div key={talk._id} className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold">{talk.title}</h3>
                <p className="text-sm text-gray-600">Event: {talk.event}</p>
                <p className="text-sm text-gray-600">Date: {talk.date}</p>
                <p className="text-sm text-gray-600">Type: {talk.type}</p>
                <p className="text-sm text-gray-600">Featured: {talk.featured ? 'Yes' : 'No'}</p>
                <p className="text-sm text-gray-600">ID: {talk._id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error Loading Talks</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error: {String(error)}</p>
        </div>
      </div>
    );
  }
}