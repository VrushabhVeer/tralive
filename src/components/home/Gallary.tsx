"use client";

import Image from 'next/image';
import React from 'react'

const Gallary = () => {
  return (
    <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-20 md:mt-40">
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1560703650-db93f86c37b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1592311675507-00555370829d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://plus.unsplash.com/premium_photo-1677636665394-bb909dbc5f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1597835072073-7c6d671bffe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://plus.unsplash.com/premium_photo-1664283661568-859f7aff0b20?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1683745734505-24d1436ed789?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1683745734413-d9029babba0e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1686328946684-4e85a9ada64f?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
        <div className="w-full">
            <Image className='w-full object-cover h-56' src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" loading='lazy' />
        </div>
    </div>
  )
}

export default Gallary