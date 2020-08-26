import { NextApiRequest, NextApiResponse } from 'next';
import {open} from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    const db = await open({filename: './mydb.sqlite', driver: sqlite3.Database});
    const vehicle = await db.get('select * from vehicle where id = ?', [req.query.id]);

    res.json(vehicle);
} 