import React from 'react';
import Gallery from '../components/Home/Gallery';
import Presentation from '../components/Home/Presentation';

export default function Home() {
    return (
        <div className="Home">
            <Presentation />
            <Gallery />
        </div>
    )
}