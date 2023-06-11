import { Knex } from "knex";
import { createRandomDepartment } from "../../src/utils/faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("departments").del();

  let departments: Array<any> = [];

  for (let i = 0; i < 50; i++) {
    const department = createRandomDepartment();

    departments.push({ ...department, dept_id: i });
  }

  // Inserts seed entries
  await knex("departments").insert(departments);
}
