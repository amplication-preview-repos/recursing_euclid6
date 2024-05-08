/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserCustomerLookupService } from "../userCustomerLookup.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCustomerLookupCreateInput } from "./UserCustomerLookupCreateInput";
import { UserCustomerLookup } from "./UserCustomerLookup";
import { UserCustomerLookupFindManyArgs } from "./UserCustomerLookupFindManyArgs";
import { UserCustomerLookupWhereUniqueInput } from "./UserCustomerLookupWhereUniqueInput";
import { UserCustomerLookupUpdateInput } from "./UserCustomerLookupUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserCustomerLookupControllerBase {
  constructor(
    protected readonly service: UserCustomerLookupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserCustomerLookup })
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserCustomerLookup(
    @common.Body() data: UserCustomerLookupCreateInput
  ): Promise<UserCustomerLookup> {
    return await this.service.createUserCustomerLookup({
      data: {
        ...data,

        appUsers: {
          connect: data.appUsers,
        },

        customers: {
          connect: data.customers,
        },
      },
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserCustomerLookup] })
  @ApiNestedQuery(UserCustomerLookupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userCustomerLookups(
    @common.Req() request: Request
  ): Promise<UserCustomerLookup[]> {
    const args = plainToClass(UserCustomerLookupFindManyArgs, request.query);
    return this.service.userCustomerLookups({
      ...args,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserCustomerLookup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userCustomerLookup(
    @common.Param() params: UserCustomerLookupWhereUniqueInput
  ): Promise<UserCustomerLookup | null> {
    const result = await this.service.userCustomerLookup({
      where: params,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserCustomerLookup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserCustomerLookup(
    @common.Param() params: UserCustomerLookupWhereUniqueInput,
    @common.Body() data: UserCustomerLookupUpdateInput
  ): Promise<UserCustomerLookup | null> {
    try {
      return await this.service.updateUserCustomerLookup({
        where: params,
        data: {
          ...data,

          appUsers: {
            connect: data.appUsers,
          },

          customers: {
            connect: data.customers,
          },
        },
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          customers: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserCustomerLookup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserCustomerLookup(
    @common.Param() params: UserCustomerLookupWhereUniqueInput
  ): Promise<UserCustomerLookup | null> {
    try {
      return await this.service.deleteUserCustomerLookup({
        where: params,
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          customers: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
