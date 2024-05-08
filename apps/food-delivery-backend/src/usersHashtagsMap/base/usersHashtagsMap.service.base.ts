/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UsersHashtagsMap as PrismaUsersHashtagsMap,
  AppUser as PrismaAppUser,
  Hashtag as PrismaHashtag,
} from "@prisma/client";

export class UsersHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UsersHashtagsMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.usersHashtagsMap.count(args);
  }

  async usersHashtagsMaps<T extends Prisma.UsersHashtagsMapFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersHashtagsMapFindManyArgs>
  ): Promise<PrismaUsersHashtagsMap[]> {
    return this.prisma.usersHashtagsMap.findMany<Prisma.UsersHashtagsMapFindManyArgs>(
      args
    );
  }
  async usersHashtagsMap<T extends Prisma.UsersHashtagsMapFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersHashtagsMapFindUniqueArgs>
  ): Promise<PrismaUsersHashtagsMap | null> {
    return this.prisma.usersHashtagsMap.findUnique(args);
  }
  async createUsersHashtagsMap<T extends Prisma.UsersHashtagsMapCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersHashtagsMapCreateArgs>
  ): Promise<PrismaUsersHashtagsMap> {
    return this.prisma.usersHashtagsMap.create<T>(args);
  }
  async updateUsersHashtagsMap<T extends Prisma.UsersHashtagsMapUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersHashtagsMapUpdateArgs>
  ): Promise<PrismaUsersHashtagsMap> {
    return this.prisma.usersHashtagsMap.update<T>(args);
  }
  async deleteUsersHashtagsMap<T extends Prisma.UsersHashtagsMapDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersHashtagsMapDeleteArgs>
  ): Promise<PrismaUsersHashtagsMap> {
    return this.prisma.usersHashtagsMap.delete(args);
  }

  async getAppUsers(parentId: string): Promise<PrismaAppUser | null> {
    return this.prisma.usersHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .appUsers();
  }

  async getHashtags(parentId: string): Promise<PrismaHashtag | null> {
    return this.prisma.usersHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .hashtags();
  }
}
