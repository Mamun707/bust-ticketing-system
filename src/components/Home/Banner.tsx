import { Suspense } from 'react';
import Search from './Search';

const Banner = () => {
    return (
        <section className='gradient-bg pb-20'>
            <div className='custom-container pt-28'>
                {/* Title */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
                        Find Your Perfect Journey
                    </h2>
                    <p className='text-xl text-muted-bg'>
                        Book bus tickets across the country with ease
                    </p>
                </div>
                <Suspense fallback={<p>Loading results...</p>}>
                    <Search />
                </Suspense>
            </div>
        </section>
    );
};

export default Banner;
