declare type User = {
  id: number;
  type: "USER" | "ADMIN";
  firstname: string;
  lastname: string;
  email: string;
  streetAddress: string;
  postCode: number;
  city: string;
};
