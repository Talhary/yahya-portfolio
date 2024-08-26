'use client'
import React from "react";
import { motion } from "framer-motion"; // For animations
import Image from "next/image"; // Assuming you're using Next.js

export const ProjectCard = ({ data }:{data:any}) => {
    return (
        <motion.div
            className="w-[80%] max-md:w-full my-10 max-md:my-10 text-black dark:text-white   mx-auto  shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        ><div className="p-6 display flex flex-col items-start justify-center border">
        <h2 className="text-4xl max-md:text-2xl font-semibold ">{data.title}</h2>
        <p className="mt-2">{data.description}</p>
        <div className="mt-4">
            <span className="inline-block bg-green-500 text-white text-sm font-semibold rounded-full px-3 py-1">
                {data.type}
            </span>
        </div>
    </div>
            <div className="relative ">
                <Image
                    height={1000}
                    width={1000}
                    src={data.imageUrl[0]}
                    alt={data.title}
                    objectFit="cover"
                />
            </div>
            
        </motion.div>
    );
};