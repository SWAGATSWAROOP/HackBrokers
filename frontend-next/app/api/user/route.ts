import { NextRequest } from "next/server";
import prisma from "@/db";
import { hash } from "bcrypt";
import * as z from 'zod';
import { ethers } from "ethers";
import Account from "../../contracts/account.sol/Account.json"; 

interface BodyType {
    Name: string
    username: string,
    password: string
}

const UserSchema = z.object({
    Name: z.string().min(1, "Required"),
    username: z.string().min(1, {
        message: "email is Required"
    }).email('Invalid email'),
    password: z.string().min(8, { message: "password must contain atleat 8 character" })
})


export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const { Name, username, password }: BodyType = UserSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        });

        if (existingUser) {
            return Response.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                Name,
                username,
                password: hashedPassword
            }
        });

        let provider = new ethers.JsonRpcProvider();
        let signer = await provider.getSigner();
        let contract = new ethers.Contract(
          "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          Account.abi,
          signer
        );
        const createUser = await contract.createUser(Name,username);
        await createUser.wait();
        return Response.json({ user: newUser, message: "Signed up Successfully", status: 201 });
    } catch (error) {
        console.error("Error occurred while creating user:", error);
        return Response.json({ error: "An error occurred while creating user" }, { status: 500 });
    }
}
