// components/SubmitProof.tsx
'use client'

import { useState } from 'react'
import { useProofSubmission } from '@/hooks/useProofSubmission'
import { useAccount } from 'wagmi'

export default function SubmitProof() {
  const [repo, setRepo] = useState('')
  const { submitProof, isLoading, isSuccess, error } = useProofSubmission()
  const { address } = useAccount()

  const handleSubmit = () => {
    if (!repo || !address) return
    submitProof({ args: [repo] })
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Submit Your GitHub Proof</h2>
      <input
        type="text"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
        placeholder="https://github.com/your-repo"
        className="w-full p-2 border rounded mb-3"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
      >
        {isLoading ? 'Submitting...' : 'Submit Proof'}
      </button>

      {isSuccess && (
        <p className="mt-2 text-green-600">Proof submitted successfully!</p>
      )}
      {error && (
        <p className="mt-2 text-red-600">Error: {(error as any).message}</p>
      )}
    </div>
  )
}
