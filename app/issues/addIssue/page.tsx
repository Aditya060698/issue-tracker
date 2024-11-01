'use client';
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function addIssue() {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Issue Title" ></TextField.Root>
      {/* <TextArea placeholder='Issue Description' size="1"></TextArea> */}
      <SimpleMDE placeholder='Issue Description'/>
      <Button >Submit New Issue</Button>
    </div>
  )
}

export default addIssue
