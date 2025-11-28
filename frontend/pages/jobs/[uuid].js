import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function JobDetail() {
  const router = useRouter();
  const { uuid } = router.query;

  const [job, setJob] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!uuid) return;

    fetch(`http://localhost:5000/api/jobs/${uuid}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setJob(data))
      .catch(err => {
        console.error(err);
        setError('Failed to load job details.');
      });
  }, [uuid]);

  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;
  if (!job) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-4">{job.job_description}</h1>
      <div className="space-y-2 text-gray-700">
        <p><strong>Client:</strong> {job.client_uuid}</p>
        <p><strong>Status:</strong> {job.status}</p>
        <p><strong>Date:</strong> {job.date}</p>
        <p><strong>Address:</strong> {job.job_address || 'N/A'}</p>
        <p><strong>Work Done:</strong> {job.work_done_description || 'N/A'}</p>
        <p><strong>Total Invoice:</strong> {job.total_invoice_amount || '0.00'}</p>
      </div>
    </div>
  );
}
