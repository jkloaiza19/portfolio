export interface IUser {
  id: string | number
  name: string
  lastName: string
  email: string
}

export interface IUserState extends IUser {
  loading: boolean
  loaded: boolean
  error: string
}