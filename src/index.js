import app from './app.js'
import { conntDB } from './db.js';
conntDB();
app.listen(4000);
console.log("sever on ",4000);