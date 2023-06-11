import { Knex } from "knex";

import { createRandomOrg } from "../../src/utils/faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("organisations").del();

  let organisations: Array<any> = [];

  for (let i = 0; i < 10; i++) {
    const org = createRandomOrg();

    organisations.push({ ...org, org_id: i });
  }

  // Inserts seed entries
  await knex("organisations").insert(organisations);
}
