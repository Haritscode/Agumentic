import React from 'react'
import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

export default function Categories({ active, onSelect, ...props }) {
  return (
    <>
    <div className='w-full'>
        <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 100 }} className="grid grid-cols-3 px-4 sm:flex sm:justify-center">
            <Nav.Item eventKey="Popular" className='sm:px-6 text-lg'>
            Popular
            </Nav.Item>
            <Nav.Item eventKey="All Categories" className='sm:px-6 text-lg'>All Categories</Nav.Item>
            <Nav.Item eventKey="Minimalist" className='sm:px-6  text-lg'>Minimalist</Nav.Item>
            <Nav.Item eventKey="Modern" className='sm:px-6  text-lg'>Modern</Nav.Item>
            <Nav.Item eventKey="Clasic" className='sm:px-6  text-lg'>Clasic</Nav.Item>
        </Nav>
    </div> 
    </>
  )
}
