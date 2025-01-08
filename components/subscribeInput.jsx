import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const subscribeInput = () => {
  return (
    <div className="flex w-full max-w-sm items-center">
        <Input type="email" placeholder="Email" className='border rounded-none' />
        <Button type="submit" className='border rounded-none hover:bg-orange-900 bg-orange-950' >Subscribe</Button>
    </div>
  )
}



export default subscribeInput;