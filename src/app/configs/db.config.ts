import * as process from 'process'

export const dbConfig = () => {
  return {
    db: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    typeOrm: {
      Synchronize: JSON.parse(
          process.env.TYPEORM_SYNCHRONIZE.toLocaleLowerCase()) as boolean,
      AutoLoadEntities: JSON.parse(
          process.env.TYPEORM_AUTOLOADENTITIES.toLocaleLowerCase()) as boolean
    }
  }
}
