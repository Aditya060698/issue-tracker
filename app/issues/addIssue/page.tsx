import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

function addIssue() {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Issue Title" size="1"></TextField.Root>
      <TextArea placeholder='Issue Description' size="1"></TextArea>
      <Button size='1'>Submit New Issue</Button>
    </div>
  )
}

export default addIssue
