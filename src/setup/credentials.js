export const USER_ROLES = {
  admin_prod: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  game_manager_prod: {
    email: process.env.GAME_MANAGER_EMAIL,
    password: process.env.GAME_MANAGER_PASSWORD,
  },
  internal_writer_prod: {
    email: process.env.INTERNAL_WRITER_EMAIL,
    password: process.env.INTERNAL_WRITER_PASSWORD,
  },
  admin_stg: {
    email: process.env.ADMIN_STG_EMAIL,
    password: process.env.ADMIN_STG_PASSWORD,
  },
  game_manager_stg: {
    email: process.env.GAME_MANAGER_STG_EMAIL,
    password: process.env.GAME_MANAGER_STG_PASSWORD,
  },
  internal_writer_stg: {
    email: process.env.INTERNAL_WRITER_STG_EMAIL,
    password: process.env.INTERNAL_WRITER_STG_PASSWORD,
  },
};
