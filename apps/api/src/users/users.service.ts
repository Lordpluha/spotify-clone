import { Injectable } from '@nestjs/common'

// This should be a real class/interface representing a user entity
export type User = {
  userId: number
  username: string
  password: string
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin'
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess'
    }
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }
}
