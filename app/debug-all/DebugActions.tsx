'use client';

export default function DebugActions() {
  const handleForceRevalidate = async () => {
    try {
      const response = await fetch('/api/force-revalidate?secret=dev');
      const result = await response.json();
      
      if (response.ok) {
        alert('Cache refreshed successfully! The page will reload.');
        window.location.reload();
      } else {
        alert('Error refreshing cache: ' + result.message);
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="space-x-4">
      <button
        onClick={handleForceRevalidate}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        🔄 Force Refresh Cache
      </button>
      <button
        onClick={handleReload}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        🔁 Reload Page
      </button>
    </div>
  );
}