import ResultsPage from '@/components/bus-tickets/Results';
import { Suspense } from 'react';

export default function BusTicketsPage() {
    return (
        <Suspense fallback={<p>Loading results...</p>}>
            <ResultsPage />
        </Suspense>
    );
}
