import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { getDbConnection } from '../src/db';
import { sendEmail } from '../src/util/sendEmail';

export const signUpRoute = {
    path: '/api/signup', 
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        // Make sure there's no existing user with that email - no verification yet
        const db = getDbConnection('react-auth-db');
        const user = await db.collection('users').findOne({ email });

        if (user) {
            console.log("found user", user)
            return res.sendStatus(409).json(user); // 409 is the "conflict" error code
        }

        // Generate the salt first
        const salt = uuid();
        const pepper = process.env.PEPPER_STRING;

        // Encrypt the password
        const passwordHash = await bcrypt.hash(salt + password + pepper, 10);

        const verificationString = uuid();
        
        // Store email and password hash in database (i.e. create user) - you'll also want to get the id
        const startingInfo = {
            hairColor: '',
            favoriteFood: '',
            bio: '',
        }

        const result = await db.collection('users').insertOne({
            email,
            isVerified: false,
            verificationString,
            passwordHash,
            salt,
            info: startingInfo,
        });
        const { insertedId } = result;

        // try {
        //     await sendEmail({
        //         to: email,
        //         from: 'mdolly01@gmail.com',
        //         subject: 'Please verify your email',
        //         text: `
        //             Thanks for signing up! To verify your email, you just need to click the link below:
        //             http://localhost:3000/verify-email/${verificationString}
        //         `
        //     });
        // } catch (e) {
        //     console.log(e);
        //     throw new Error(e);
        // }

        jwt.sign({
            id: insertedId,
            isVerified: false,
            email, // Do NOT send the salt back to the user
            info: startingInfo,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json({token});
        });
    },
};