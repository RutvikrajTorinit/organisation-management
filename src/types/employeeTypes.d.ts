export interface User {
  emp_id: number;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  org_id: number | null;
  created_at: Date;
  updated_at: Date;
}
