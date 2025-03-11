import { Injectable } from '@nestjs/common';
import { UserRepository } from 'shared/dist';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getToken(data: { user: string }): Promise<string | null> {
    const isVerified = await this.userRepository.verifyUser(data.user);
    if (isVerified) return 'abcdef';
    else return null;
  }
}
