import React from 'react';
import Link from 'next/link'

const Header: React.FC = () => (
    <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href="/">
                        <a>
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </a>
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link href="/contact-us">
                        <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact us
                        </a>
                    </Link>
                    <Link href="/create">
                        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Create
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Header;