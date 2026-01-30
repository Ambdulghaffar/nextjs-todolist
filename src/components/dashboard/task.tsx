import { ChevronDown, MoreHorizontal, Plus, Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Checkbox } from '../ui/checkbox'

export default function Task() {
    const tabs = [
        { label: 'active task', className: 'text-black' },
        { label: 'completed', className: 'text-gray-500' }
    ]

    const tasks = [
        {
            title: 'Team Meeting',
            description: 'Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.',
            time: '10:30 AM - 12:00 PM',
            className: 'bg-blue-200'
        },
        {
            title: 'Work on Branding',
            description: 'Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.',
            time: '10:30 AM - 12:00 PM',
            className: 'bg-purple-200'
        },
        {
            title: 'Make a Report for client',
            description: 'Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.',
            time: '10:30 AM - 12:00 PM',
            className: 'bg-yellow-100'
        },
        {
            title: 'Create a planer',
            description: 'Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.',
            time: '10:30 AM - 12:00 PM',
            className: 'bg-pink-200'
        },
        {
            title: 'Create Treatment Plan',
            description: 'Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.',
            time: '10:30 AM - 12:00 PM',
            className: 'bg-green-200'
        },
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
                {tabs.map((tab, id) => (
                    <Button key={id} className={`capitalize bg-gray-50 hover:bg-gray-100 ${tab.className}`}>
                        {tab.label}
                    </Button>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-4' >
                {tasks.map((task, id) => (
                    <Card key={id} className={`${task.className}`} >
                        <CardHeader>
                            <CardTitle className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Checkbox className='bg-white' />
                                    <p>{task.title}</p>
                                </div>
                                <MoreHorizontal />
                            </CardTitle>
                            <CardDescription>{task.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <p>{task.time}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
{/*             <div className="flex justify-center mt-8">
                <Card className='h-52 w-60 bg-stone-300 flex flex-col items-center gap-4'>
                </Card>
            </div> */}
        </div>
    )
}
