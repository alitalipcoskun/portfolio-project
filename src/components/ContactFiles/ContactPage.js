import React from 'react';

import SectionContainer from '../UI/SectionContainer';
import { Skeleton } from '@/shadcn_ui/skeleton';
import ContactForm from './ContactForm';

const ContactPage = ({ isLoading }) => {
    return (
        <SectionContainer className="container flex flex-col my-10 justify-center items-center h-[100vh] w-[100vw]">
            {isLoading ? (
                <div className="flex flex-col items-center sm:items-start justify-center text-left sm:text-left max-w-full mb-10">
                    <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                    <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                    <Skeleton className="h-12 w-[225px] mb-2" />
                </div>
            ) : (
                <div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full mb-10" >
                    <h3 className="text-2xl sm:text-4xl font-bold mb-2">Feel Free For Getting Contact With Me!</h3>
                    <p className="text-base sm:text-lg">
                        If anything that I can help you with, or you just want to get contact with me, you will be able to send a message towards the form or you may prefer my social media accounts. I also shared my LinkedIn. I check my inbox every day. I will get touch with you.
                        <br />
                        Thanks :)
                    </p>
                </div >
            )}
           <ContactForm></ContactForm>
        </SectionContainer>
    );
};

export default ContactPage;
