import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: true },
    { name: 'Painting', href: '#services-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                            <div className='lg:hidden'>
                                <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                                    Contact Us
                                </button>
                            </div>
                            <div className='hidden lg:block'>
                                <p className="text-2xl font-bold text-blue-600">Contact Us</p>
                                <div className='mt-4 space-y-2'>
                                    <p className="text-lg font-semibold text-gray-700">
                                        Email: <a href="mailto:Avmarjan@gmail.com" className="text-blue-500 hover:underline">Avmarjan@gmail.com</a>
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700">
                                        Phone: <a href="tel: 586-495-6378" className="text-blue-500 hover:underline">586-495-6378</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
