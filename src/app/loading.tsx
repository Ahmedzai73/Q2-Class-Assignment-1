export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700">
        <div className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          <p className="text-2xl font-semibold">Loading...</p>
          <p className="text-lg text-gray-500">
            Please wait while the content is loading.
          </p>
        </div>
      </div>
    );
  }
  