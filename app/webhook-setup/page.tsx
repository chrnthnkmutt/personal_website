'use client';

import Link from "next/link";
import { useState } from "react";

export default function WebhookSetupPage() {
  const webhookUrl = "https://boatchrnthn.vercel.app/api/revalidate";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">⚡ Setup Instant Content Updates</h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
          🚀 Current Update Speed
        </h2>
        <p className="text-blue-700 dark:text-blue-300">
          <strong>Current:</strong> Updates every 10 seconds<br />
          <strong>With Webhook:</strong> Updates instantly (under 1 second)!
        </p>
      </div>

      <div className="space-y-8">
        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">📋 Step-by-Step Webhook Setup</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 1: Go to Sanity Studio</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Visit your Sanity project dashboard at{" "}
                <a href="https://sanity.io/manage" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  sanity.io/manage
                </a>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 2: Navigate to API Settings</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Click on your project</li>
                <li>Go to <strong>API</strong> tab</li>
                <li>Click <strong>Webhooks</strong></li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 3: Create New Webhook</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Name:</label>
                  <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">
                    Website Revalidation
                  </code>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">URL:</label>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm flex-1">
                      {webhookUrl}
                    </code>
                    <button
                      onClick={() => copyToClipboard(webhookUrl)}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        copied 
                          ? 'bg-green-600 text-white' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Dataset:</label>
                  <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">
                    production
                  </code>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Trigger on:</label>
                  <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">
                    Create, Update, Delete
                  </code>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 4: Set Secret (Optional but Recommended)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Add this environment variable to your Vercel project:
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm block">
                SANITY_HOOK_SECRET=your-secret-key-here
              </code>
              <p className="text-sm text-gray-500 mt-2">
                Then use the same secret in your Sanity webhook configuration
              </p>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🧪 Test Your Setup</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              After setting up the webhook, test it by:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Add a new Friend & Collaborator in Sanity Studio</li>
              <li>Publish the change</li>
              <li>Check your website - it should update within seconds!</li>
            </ol>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
              <p className="text-green-800 dark:text-green-200">
                <strong>✅ Success!</strong> If the webhook is working, you&apos;ll see updates instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🛠️ Manual Tools</h2>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/debug-all"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              🔍 Debug Database
            </Link>
            <Link 
              href="/api/force-revalidate?secret=dev"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              🔄 Force Refresh Now
            </Link>
            <Link 
              href="/studio"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ✏️ Edit Content
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}