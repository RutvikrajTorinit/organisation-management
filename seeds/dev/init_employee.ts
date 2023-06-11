import { Knex } from "knex";
import { createRandomUser } from "../../src/utils/faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //   await knex("users").del();

  let users: Array<any> = [];

  for (let i = 1; i <= 100; i++) {
    const user = createRandomUser();

    users.push({
      ...user,
      user_id: i,
      email: `${user.first_name}.${user.last_name}${i}@gmail.com`,
    });
  }

  // Inserts seed entries
  await knex("users").insert(users);
}
