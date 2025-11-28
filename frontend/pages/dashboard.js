import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setJobs(data))
      .catch(err => {
        console.error(err);
        setError('Failed to load bookings. Please try again later.');
      });
  }, []);

  const handleRowClick = (uuid) => {
    router.push(`/jobs/${uuid}`); // navigate to job detail page
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Bookings Dashboard
      </h1>

      {error && (
        <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
      )}

      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job, idx) => (
              <tr
                key={job.uuid}
                className={`cursor-pointer hover:bg-blue-50 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}
                onClick={() => handleRowClick(job.uuid)}
              >
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                  {job.job_description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {job.client_uuid}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  {job.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.date}
                </td>
              </tr>
            ))}
            {jobs.length === 0 && !error && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-400">
                  No bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
