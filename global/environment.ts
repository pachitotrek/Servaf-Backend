
export const SERVER_PORT:number = 3100;
export const DBURL:string = 'mongodb://localhost:27017/servaf';
export const CADUCIDAD_TOKEN:number=Number(process.env.CADUCIDAD_TOKEN) ||60*60*24*30;
export const SEED:string='este-es-el-seed-desarrollo';

export const FOLDER:string='C:\\Program Files\\MongoDB\\Server\\4.2\\bin';
//========================
//entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 


