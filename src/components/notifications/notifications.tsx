'use client'

import React, { useState } from 'react';
import useNotificationUIControlStore from '@/store/UI_control/notification';
import NotificationData from '@/data/notifications.json';
import Image from "next/image";


const NOTIFICATIONS = () => {

    const setNotificationModalState = useNotificationUIControlStore((state) => state.updateNotificationModal);

    return (

        <>
            <div className="">
                <div
                    className="join_background"
                    onClick={() => {
                        setNotificationModalState(false);
                    }}
                ></div>
                <div className="joinModal !w-[500px] drop-shadow-lg mt-5">
                    <div className='flex justify-between p-5'>
                        <div className=''>
                            <h1 className="text-center text-[#322A44] text-[18px] ">NOTIFICATIONS</h1>
                        </div>
                        <div
                            className="closeBtn"
                            onClick={() => {
                                setNotificationModalState(false);
                            }}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                                    fill="#322A44"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-3 p-3 rounded-lg text-[12px]">

                        <h1 className="text-[#FF0000] ">NEW</h1>
                        <h1 className='text-[#322A44] mt-3 border-b-2 pb-2'>
                            MESSAGES(10)
                        </h1>
                        <div>
                            {
                                NotificationData.map((index, key) =>
                                    <>
                                        <div key={key} className='flex items-center mt-5 gap-3 border-b-2 pb-3'>
                                            <div className='h-[30px]'>
                                                <Image
                                                    src={index.avatar}
                                                    className='h-full w-full aspect-square rounded-full'
                                                    width={100}
                                                    height={100}
                                                    alt='avatar'
                                                />
                                            </div>

                                            <div className='flex gap-3'>
                                                <div>NEW SALE</div>
                                                <div className='text-gray-400'>IN</div> 
                                                <div>{index.name} </div>
                                                <div className='text-gray-400'>{index.lastSeen}</div> 
                                                
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className='text-gray-400 text-center mt-3 underline'>
                            VIEW MESSAGES
                        </div>
                        <h1 className='text-[#322A44] mt-3 border-b-2 pb-2'>
                            ACTIVITY(10)
                        </h1>
                        <div>
                            {
                                NotificationData.map((index, key) =>
                                    <>
                                        <div key={key} className='flex items-center mt-5 gap-3 border-b-2 pb-3'>
                                            <div className='h-[30px]'>
                                                <Image
                                                    src={index.avatar}
                                                    className='h-full w-full aspect-square rounded-full'
                                                    width={100}
                                                    height={100}
                                                    alt='avatar'
                                                />
                                            </div>

                                            <div className='flex gap-3'>
                                                <div>NEW SALE</div>
                                                <div className='text-gray-400'>IN</div> 
                                                <div>{index.name} </div>
                                                <div className='text-gray-400'>{index.lastSeen}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className='text-gray-400 text-center mt-3 underline'>
                            VIEW ACTIVITY
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NOTIFICATIONS;