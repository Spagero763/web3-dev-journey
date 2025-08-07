// components/SubmitProof.tsx
'use client'

import { useState } from 'react'
import { useProofSubmission } from '@/hooks/useProofSubmission'
import { useAccount } from 'wagmi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function SubmitProof() {
  const [repo, setRepo] = useState('')
  const { address } = useAccount()
  const { toast } = useToast();

  const { submitProof, isPending, isSuccess, error } = useProofSubmission({
    onSuccess: () => {
      toast({
        title: "Proof Submitted!",
        description: "Your GitHub repository has been submitted.",
      });
    },
    onError: (err) => {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: err.message,
      });
    }
  })

  const handleSubmit = () => {
    if (!repo || !address) return
    submitProof({ args: [repo] })
  }

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Submit Your GitHub Proof</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="https://github.com/your-repo"
          />
          <Button
            onClick={handleSubmit}
            disabled={isPending || !address}
            className="w-full transition"
          >
            {isPending ? 'Submitting...' : 'Submit Proof'}
          </Button>
          {isSuccess && (
            <p className="mt-2 text-green-600">Proof submitted successfully!</p>
          )}
          {error && (
            <p className="mt-2 text-red-600">Error: {(error as any).shortMessage || (error as any).message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
