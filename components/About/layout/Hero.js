import React from 'react';
import CardInvitation from '../ui/hero/Card';
import TitleAbout from '../ui/hero/Title';
import Gradation from '../ui/hero/Garadation';

const Hero = () => {
    return (<>
    <div className="Hero w-full bg-neutral-50 flex-col justify-start items-center gap-2.5 inline-flex">
        {/* Title */}
        <TitleAbout></TitleAbout>
        {/* Card */}
        <CardInvitation></CardInvitation>
        {/* Gradation */}
        <Gradation></Gradation>
    </div>
    </>
        
    );
}

export default Hero;