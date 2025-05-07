import prisma from '../db.js';

export async function registerComplain(userId, Category, Description, Imageurl, Status, Burst, Lat, Long) {
    try {
        return await prisma.complain.create({
            data: {
                userId,
                Category,
                Description,
                Imageurl,
                Status,
                Burst,
                Lat,
                Long
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function getComplainData(userId) {
    try {
        return await prisma.complain.findMany({
            where: {
                userId: userId
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        phoneNo: true,
                        email: true
                    }
                }
            }
        });
    } catch (error) {
        throw error;
    }
}