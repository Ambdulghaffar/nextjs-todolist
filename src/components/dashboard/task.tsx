import { ChevronDown, Plus, Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'

export default function Task() {
    const tabs = [
        { label: 'active task' , className: 'text-black'},
        { label: 'completed' , className: 'text-gray-500'}
    ]

    return (
        <div className='px-5 space-y-6'>
            <div className='flex items-center justify-between  py-5 border-b border-t'>
                <div className='flex items-center gap-2'>
                    <p className='font-bold text-lg'>21stFeb,2025</p>
                    <ChevronDown />
                </div>
                <div className='flex items-center gap-3'>
                    <InputGroup>
                        <InputGroupInput className='capitalize' placeholder="search list" />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button className='bg-blue-700'>
                        <Plus />
                        <span className='capitalize'>add new list</span>
                    </Button>
                </div>
            </div>
            <div className='flex items-center gap-3 '>
                {tabs.map((tab,id) => (
                    <Button key={id} className={`capitalize bg-gray-50 hover:bg-gray-100 ${tab.className}`}>
                        {tab.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
