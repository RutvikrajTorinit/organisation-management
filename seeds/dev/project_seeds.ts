import { Knex } from "knex";
import { createRandomProject } from "../../src/utils/faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("projects").del();

  let projects: Array<any> = [];

  for (let i = 0; i < 50; i++) {
    const proj = createRandomProject();

    projects.push({ ...proj, proj_id: i });
  }

  // Inserts seed entries
  await knex("projects").insert(projects);
}
