import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

function IssuesPage() {
  return (
    <div>
      <Button><Link href='issues/addIssue'>Add Issue</Link></Button>
    </div>
  )
}

export default IssuesPage
