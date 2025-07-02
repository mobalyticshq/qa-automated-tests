export const USER_ROLES = {
  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  game_manager: {
    email: process.env.GAME_MANAGER_EMAIL,
    password: process.env.GAME_MANAGER_PASSWORD,
  },
  internal_writer: {
    email: process.env.INTERNAL_WRITER_EMAIL,
    password: process.env.INTERNAL_WRITER_PASSWORD,
  },
};
