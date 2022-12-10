import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Option(props) {
    return (
        <div className="flex justify-between">
            <div className="flex-5 items-start flex mx-5 my-5">
                <p className="text-left text-xl w-72 font-bold px-1 py-3 ">REVENUE DASHBOARD</p> 
            </div>
            <div className='flex'>
                <div className="flex-1 w-[210px] h-[100px] m-5 mr-5 border border-gray rounded-xl p-2 shadow-lg">
                    <span className='flex-1 my-3 font-serif'>Total Revenue</span>
                    <span className='ml-3 text-sm flex-1 text-green-500'>+4.1% <ArrowUpwardIcon className='w-10 h-10'/></span>
                    <div className='flex-1 flex justify-between'>
                        <span className='text-2xl flex-1 mx-1 my-2'>$960</span>
                    </div>
                </div>
                <div className="flex-1 w-[210px] h-[100px] m-5 mr-5 border border-gray rounded-xl p-2 shadow-lg">
                    <span className='flex-1 my-3 font-serif'>Total Product</span>
                    <span className='ml-3 text-sm flex-1 text-green-500'>+6.2% <ArrowUpwardIcon className='w-10 h-10'/></span>
                    <div className='flex-1 flex justify-between'>
                        <span className='text-2xl flex-1 mx-1 my-2'>250</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Option;