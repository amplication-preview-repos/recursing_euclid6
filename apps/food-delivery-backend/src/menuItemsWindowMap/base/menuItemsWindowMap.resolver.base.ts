/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MenuItemsWindowMap } from "./MenuItemsWindowMap";
import { MenuItemsWindowMapCountArgs } from "./MenuItemsWindowMapCountArgs";
import { MenuItemsWindowMapFindManyArgs } from "./MenuItemsWindowMapFindManyArgs";
import { MenuItemsWindowMapFindUniqueArgs } from "./MenuItemsWindowMapFindUniqueArgs";
import { CreateMenuItemsWindowMapArgs } from "./CreateMenuItemsWindowMapArgs";
import { UpdateMenuItemsWindowMapArgs } from "./UpdateMenuItemsWindowMapArgs";
import { DeleteMenuItemsWindowMapArgs } from "./DeleteMenuItemsWindowMapArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { TimeWindow } from "../../timeWindow/base/TimeWindow";
import { MenuItemsWindowMapService } from "../menuItemsWindowMap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemsWindowMap)
export class MenuItemsWindowMapResolverBase {
  constructor(
    protected readonly service: MenuItemsWindowMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "read",
    possession: "any",
  })
  async _menuItemsWindowMapsMeta(
    @graphql.Args() args: MenuItemsWindowMapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MenuItemsWindowMap])
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "read",
    possession: "any",
  })
  async menuItemsWindowMaps(
    @graphql.Args() args: MenuItemsWindowMapFindManyArgs
  ): Promise<MenuItemsWindowMap[]> {
    return this.service.menuItemsWindowMaps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MenuItemsWindowMap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "read",
    possession: "own",
  })
  async menuItemsWindowMap(
    @graphql.Args() args: MenuItemsWindowMapFindUniqueArgs
  ): Promise<MenuItemsWindowMap | null> {
    const result = await this.service.menuItemsWindowMap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuItemsWindowMap)
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "create",
    possession: "any",
  })
  async createMenuItemsWindowMap(
    @graphql.Args() args: CreateMenuItemsWindowMapArgs
  ): Promise<MenuItemsWindowMap> {
    return await this.service.createMenuItemsWindowMap({
      ...args,
      data: {
        ...args.data,

        menuItems: {
          connect: args.data.menuItems,
        },

        timeWindow: {
          connect: args.data.timeWindow,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuItemsWindowMap)
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "update",
    possession: "any",
  })
  async updateMenuItemsWindowMap(
    @graphql.Args() args: UpdateMenuItemsWindowMapArgs
  ): Promise<MenuItemsWindowMap | null> {
    try {
      return await this.service.updateMenuItemsWindowMap({
        ...args,
        data: {
          ...args.data,

          menuItems: {
            connect: args.data.menuItems,
          },

          timeWindow: {
            connect: args.data.timeWindow,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MenuItemsWindowMap)
  @nestAccessControl.UseRoles({
    resource: "MenuItemsWindowMap",
    action: "delete",
    possession: "any",
  })
  async deleteMenuItemsWindowMap(
    @graphql.Args() args: DeleteMenuItemsWindowMapArgs
  ): Promise<MenuItemsWindowMap | null> {
    try {
      return await this.service.deleteMenuItemsWindowMap(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => MenuItem, {
    nullable: true,
    name: "menuItems",
  })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async getMenuItems(
    @graphql.Parent() parent: MenuItemsWindowMap
  ): Promise<MenuItem | null> {
    const result = await this.service.getMenuItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => TimeWindow, {
    nullable: true,
    name: "timeWindow",
  })
  @nestAccessControl.UseRoles({
    resource: "TimeWindow",
    action: "read",
    possession: "any",
  })
  async getTimeWindow(
    @graphql.Parent() parent: MenuItemsWindowMap
  ): Promise<TimeWindow | null> {
    const result = await this.service.getTimeWindow(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
