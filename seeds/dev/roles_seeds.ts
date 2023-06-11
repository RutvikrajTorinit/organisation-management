import { Knex } from "knex";
import { createRandomRole } from "../../src/utils/faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("roles").del();

  let roles: Array<any> = [];

  for (let i = 0; i < 50; i++) {
    const role = createRandomRole();

    roles.push({ ...role, role_id: i });
  }

  // Inserts seed entries
  await knex("roles").insert(roles);
}
