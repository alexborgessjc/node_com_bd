import { Pool } from "pg";

const connectionString = 'postgres://qpzvscub:iIXmq6AFB6cl_vytuzsmCI0qLV8X20RZ@kesavan.db.elephantsql.com/qpzvscub';

const db = new Pool({connectionString});

export default db;