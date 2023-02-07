export default interface IUser {
    id?: any | null,
    fullname: string,
    phone : string,
    email: string,
    password: string,
    confirmPassword?: string,
  }