import React from 'react';

import './style.scss';
import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import { logtoConfig } from '../logto';
import LogInButton from '@/components/LoginButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const metadata = {
    title: "Port Arthur"
}

const Home = async () => {
    return (
        <>
            <main>
                <div className='content'>
                    Velkommen til SmallWebsite
                </div>
                <div>

                </div>
            </main>
        </>
    )
}

export default Home;