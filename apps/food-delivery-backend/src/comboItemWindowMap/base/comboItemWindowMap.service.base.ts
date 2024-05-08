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
  ComboItemWindowMap as PrismaComboItemWindowMap,
  ComboGroup as PrismaComboGroup,
  TimeWindow as PrismaTimeWindow,
} from "@prisma/client";

export class ComboItemWindowMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComboItemWindowMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.comboItemWindowMap.count(args);
  }

  async comboItemWindowMaps<T extends Prisma.ComboItemWindowMapFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboItemWindowMapFindManyArgs>
  ): Promise<PrismaComboItemWindowMap[]> {
    return this.prisma.comboItemWindowMap.findMany<Prisma.ComboItemWindowMapFindManyArgs>(
      args
    );
  }
  async comboItemWindowMap<T extends Prisma.ComboItemWindowMapFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboItemWindowMapFindUniqueArgs>
  ): Promise<PrismaComboItemWindowMap | null> {
    return this.prisma.comboItemWindowMap.findUnique(args);
  }
  async createComboItemWindowMap<T extends Prisma.ComboItemWindowMapCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboItemWindowMapCreateArgs>
  ): Promise<PrismaComboItemWindowMap> {
    return this.prisma.comboItemWindowMap.create<T>(args);
  }
  async updateComboItemWindowMap<T extends Prisma.ComboItemWindowMapUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboItemWindowMapUpdateArgs>
  ): Promise<PrismaComboItemWindowMap> {
    return this.prisma.comboItemWindowMap.update<T>(args);
  }
  async deleteComboItemWindowMap<T extends Prisma.ComboItemWindowMapDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboItemWindowMapDeleteArgs>
  ): Promise<PrismaComboItemWindowMap> {
    return this.prisma.comboItemWindowMap.delete(args);
  }

  async getComboGroups(parentId: string): Promise<PrismaComboGroup | null> {
    return this.prisma.comboItemWindowMap
      .findUnique({
        where: { id: parentId },
      })
      .comboGroups();
  }

  async getTimeWindow(parentId: string): Promise<PrismaTimeWindow | null> {
    return this.prisma.comboItemWindowMap
      .findUnique({
        where: { id: parentId },
      })
      .timeWindow();
  }
}
