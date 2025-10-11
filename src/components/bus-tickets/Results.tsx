'use client';

import SeatSelectionModal from '@/components/bus-tickets/SeatSelectionModal';
import Search from '@/components/Home/Search';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'next/navigation';
import { boardingPoints, buses, droppingPoints, operators } from '../../app/constants';

const ResultsPage = () => {
    const searchParams = useSearchParams();
    const tripType = searchParams.get('tripType');

    return (
        <div className='custom-container py-12'>
            <Search customStyle='border' />
            <section className='mt-4 flex gap-8'>
                {/* Sidebar Filters */}
                <aside className='basis-[20%] bg-white rounded-2xl border'>
                    <div className='flex justify-between items-center px-5 py-4'>
                        <h3 className='font-semibold text-lg'>Filters</h3>
                        <Button size='sm' variant='outline' className='text-xs p-1 px-2'>
                            Reset
                        </Button>
                    </div>
                    <Separator />
                    <div className='px-5 py-4 space-y-4'>
                        {/* Bus Type */}
                        <div>
                            <h4 className='text-sm font-medium mb-4'>Bus Type</h4>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center space-x-2'>
                                    <Checkbox id='ac' />
                                    <label htmlFor='ac' className='text-sm text-muted'>
                                        AC
                                    </label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Checkbox id='nonac' />
                                    <label htmlFor='nonac' className='text-sm text-muted'>
                                        Non AC
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Operator */}
                        <div>
                            <h4 className='text-sm font-medium mb-2'>Operator</h4>
                            <Select>
                                <SelectTrigger className='w-full h-11'>
                                    <SelectValue placeholder='Select Operator' />
                                </SelectTrigger>
                                <SelectContent>
                                    {operators.map((op, i) => (
                                        <SelectItem key={i} value={op}>
                                            {op}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Boarding Point */}
                        <div>
                            <h4 className='text-sm font-medium mb-2'>Boarding Point</h4>
                            <Select>
                                <SelectTrigger className='w-full h-11'>
                                    <SelectValue placeholder='Select Boarding Point' />
                                </SelectTrigger>
                                <SelectContent>
                                    {boardingPoints.map((bp, i) => (
                                        <SelectItem key={i} value={bp}>
                                            {bp}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Dropping Point */}
                        <div>
                            <h4 className='text-sm font-medium mb-2'>Dropping Point</h4>
                            <Select>
                                <SelectTrigger className='w-full h-11'>
                                    <SelectValue placeholder='Select Dropping Point' />
                                </SelectTrigger>
                                <SelectContent>
                                    {droppingPoints.map((dp, i) => (
                                        <SelectItem key={i} value={dp}>
                                            {dp}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Departure Time */}
                        <div>
                            <h4 className='text-sm font-medium mb-2'>Departure Time</h4>
                            <div className='space-y-2 text-muted font-normal'>
                                <Button
                                    variant='outline'
                                    className='w-full justify-start font-normal'
                                >
                                    🌅 Early Morning (Before 6 AM)
                                </Button>
                                <Button
                                    variant='outline'
                                    className='w-full justify-start font-normal'
                                >
                                    ☀️ Morning (6 AM - 12 PM)
                                </Button>
                                <Button
                                    variant='outline'
                                    className='w-full justify-start font-normal'
                                >
                                    🌤️ Afternoon (12 PM - 6 PM)
                                </Button>
                                <Button
                                    variant='outline'
                                    className='w-full justify-start font-normal'
                                >
                                    🌙 Evening (After 6 PM)
                                </Button>
                            </div>
                        </div>

                        {/* ✅ Arrival Time Filter (only for round trips) */}
                        {tripType === 'round' && (
                            <div>
                                <h4 className='text-sm font-medium mb-2'>Return Arrival Time</h4>
                                <div className='space-y-2 text-muted'>
                                    <Button
                                        variant='outline'
                                        className='w-full justify-start font-normal'
                                    >
                                        🌅 Early Morning (Before 6 AM)
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='w-full justify-start font-normal'
                                    >
                                        ☀️ Morning (6 AM - 12 PM)
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='w-full justify-start font-normal'
                                    >
                                        🌤️ Afternoon (12 PM - 6 PM)
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='w-full justify-start font-normal'
                                    >
                                        🌙 Evening (After 6 PM)
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Results */}
                <main className='space-y-4 basis-[80%]'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-sm font-medium'>Showing 254 results</p>
                        </div>
                        <div className='flex gap-4'>
                            <Button variant='outline'>Low to High</Button>
                            <Button variant='outline'>High to Low</Button>
                        </div>
                    </div>

                    {/* Bus Cards */}
                    {buses.map((bus) => (
                        <div
                            key={bus.id}
                            className='p-6 flex gap-4 items-center shadow-none border rounded-md'
                        >
                            <div className='basis-[25%]'>
                                <div className='p-0'>
                                    <div className='text-lg font-medium'>{bus.operator}</div>
                                </div>
                                <div className='p-0 space-y-2'>
                                    <p className='text-sm text-gray-600'>{bus.route}</p>
                                    {bus.discount > 0 && (
                                        <p className='text-sm text-red-500'>
                                            🎉 Get {bus.discount} TK Discount
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Timing + Price */}
                            <div className='basis-[75%] space-y-2 flex gap-4 justify-between items-center'>
                                <div className='basis-[50%] flex items-center justify-between px-4'>
                                    {/* Departure */}
                                    <div className='text-left'>
                                        <p className='text-base font-semibold  whitespace-nowrap'>
                                            {bus.departure}
                                        </p>
                                        <p className='text-xs text-gray-500 text-right'>
                                            {bus.departureDate}
                                        </p>
                                        <p className='text-xs text-gray-500 text-right'>
                                            {bus.departureCity}
                                        </p>
                                    </div>

                                    {/* Duration with line */}
                                    <div className='flex items-center flex-col mx-4'>
                                        <div className='flex items-center'>
                                            <span className='w-2 h-2 rounded-full bg-primary'></span>
                                            <div className='w-24 h-[2px] bg-primary mx-1'></div>
                                            <span className='w-2 h-2 rounded-full bg-primary'></span>
                                        </div>
                                        <p className='text-xs text-gray-500 mt-1'>{bus.duration}</p>
                                    </div>

                                    {/* Arrival */}
                                    <div className='text-right'>
                                        <p className='text-base font-semibold whitespace-nowrap'>
                                            {bus.arrival}
                                        </p>
                                        <p className='text-xs text-gray-500 text-right'>
                                            {bus.arrivalDate}
                                        </p>
                                        <p className='text-xs text-gray-500 text-right'>
                                            {bus.arrivalCity}
                                        </p>
                                    </div>
                                </div>

                                <div className='basis-[25%] text-center'>
                                    <p className='text-lg font-semibold text-primary'>
                                        ৳{bus.price}
                                    </p>
                                    <p className='text-xs text-gray-500 mt-1 text-center'>
                                        {bus.seats} Seats Available
                                    </p>
                                </div>

                                <div className='basis-[25%] flex flex-col gap-2'>
                                    {/* Instead of <Button>Book Ticket</Button> */}
                                    <SeatSelectionModal bus={bus} />

                                    <Button className='px-8 py-4' variant='outline' size='lg'>
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
        </div>
    );
};

export default ResultsPage;
