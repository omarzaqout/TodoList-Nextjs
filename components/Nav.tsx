import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Nav = () => {
    return (
        <nav className='pl-4 container flex items-center justify-between'>
            <ModeToggle />
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </nav>
    )
}

export default Nav
