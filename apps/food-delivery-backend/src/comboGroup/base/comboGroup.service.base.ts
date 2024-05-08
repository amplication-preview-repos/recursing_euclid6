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
  ComboGroup as PrismaComboGroup,
  ComboItemTable as PrismaComboItemTable,
  ComboItemWindowMap as PrismaComboItemWindowMap,
  Restaurant as PrismaRestaurant,
} from "@prisma/client";

export class ComboGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComboGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.comboGroup.count(args);
  }

  async comboGroups<T extends Prisma.ComboGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboGroupFindManyArgs>
  ): Promise<PrismaComboGroup[]> {
    return this.prisma.comboGroup.findMany<Prisma.ComboGroupFindManyArgs>(args);
  }
  async comboGroup<T extends Prisma.ComboGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboGroupFindUniqueArgs>
  ): Promise<PrismaComboGroup | null> {
    return this.prisma.comboGroup.findUnique(args);
  }
  async createComboGroup<T extends Prisma.ComboGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboGroupCreateArgs>
  ): Promise<PrismaComboGroup> {
    return this.prisma.comboGroup.create<T>(args);
  }
  async updateComboGroup<T extends Prisma.ComboGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboGroupUpdateArgs>
  ): Promise<PrismaComboGroup> {
    return this.prisma.comboGroup.update<T>(args);
  }
  async deleteComboGroup<T extends Prisma.ComboGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboGroupDeleteArgs>
  ): Promise<PrismaComboGroup> {
    return this.prisma.comboGroup.delete(args);
  }

  async findComboItemTable(
    parentId: string,
    args: Prisma.ComboItemTableFindManyArgs
  ): Promise<PrismaComboItemTable[]> {
    return this.prisma.comboGroup
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comboItemTable(args);
  }

  async findComboItemWindowMap(
    parentId: string,
    args: Prisma.ComboItemWindowMapFindManyArgs
  ): Promise<PrismaComboItemWindowMap[]> {
    return this.prisma.comboGroup
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comboItemWindowMap(args);
  }

  async getRestaurants(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.comboGroup
      .findUnique({
        where: { id: parentId },
      })
      .restaurants();
  }
}
