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
import { RewardService } from "../reward.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RewardCreateInput } from "./RewardCreateInput";
import { Reward } from "./Reward";
import { RewardFindManyArgs } from "./RewardFindManyArgs";
import { RewardWhereUniqueInput } from "./RewardWhereUniqueInput";
import { RewardUpdateInput } from "./RewardUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RewardControllerBase {
  constructor(
    protected readonly service: RewardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reward })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReward(@common.Body() data: RewardCreateInput): Promise<Reward> {
    return await this.service.createReward({
      data: {
        ...data,

        appUsers: {
          connect: data.appUsers,
        },
      },
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        points: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Reward] })
  @ApiNestedQuery(RewardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rewards(@common.Req() request: Request): Promise<Reward[]> {
    const args = plainToClass(RewardFindManyArgs, request.query);
    return this.service.rewards({
      ...args,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        points: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reward(
    @common.Param() params: RewardWhereUniqueInput
  ): Promise<Reward | null> {
    const result = await this.service.reward({
      where: params,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        points: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReward(
    @common.Param() params: RewardWhereUniqueInput,
    @common.Body() data: RewardUpdateInput
  ): Promise<Reward | null> {
    try {
      return await this.service.updateReward({
        where: params,
        data: {
          ...data,

          appUsers: {
            connect: data.appUsers,
          },
        },
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expirationDate: true,
          id: true,
          points: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReward(
    @common.Param() params: RewardWhereUniqueInput
  ): Promise<Reward | null> {
    try {
      return await this.service.deleteReward({
        where: params,
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expirationDate: true,
          id: true,
          points: true,
          updatedAt: true,
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
