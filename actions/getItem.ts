'use server';
import { db } from "@/lib/db";

export const getItem = async (id: string) => {
    try {
        const item = await db.projects.findUnique({
            where: { id: id }
        });
        return item;    
    } catch (er) {
        console.log(er);
    }
};
