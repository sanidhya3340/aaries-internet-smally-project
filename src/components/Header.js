import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-row-reverse mr-24 pt-12 mb-2">
            <div className="bg-red-text h-8 w-8  rounded-full flex items-center justify-center ml-2 shadow-md">
                <img src="/assets/icon/ig.png" alt="" />
            </div>
            <div className="bg-red-text h-8 w-8 rounded-full flex items-center justify-center ml-2 shadow-md">
                <img src="/assets/icon/fb.png" alt="" className="" />
            </div>
        </div>
    )
}
