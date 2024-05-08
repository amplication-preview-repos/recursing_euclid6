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
import { DeliveryPartnerInstructionService } from "../deliveryPartnerInstruction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeliveryPartnerInstructionCreateInput } from "./DeliveryPartnerInstructionCreateInput";
import { DeliveryPartnerInstruction } from "./DeliveryPartnerInstruction";
import { DeliveryPartnerInstructionFindManyArgs } from "./DeliveryPartnerInstructionFindManyArgs";
import { DeliveryPartnerInstructionWhereUniqueInput } from "./DeliveryPartnerInstructionWhereUniqueInput";
import { DeliveryPartnerInstructionUpdateInput } from "./DeliveryPartnerInstructionUpdateInput";
import { DeliveryInstructionAddressMapFindManyArgs } from "../../deliveryInstructionAddressMap/base/DeliveryInstructionAddressMapFindManyArgs";
import { DeliveryInstructionAddressMap } from "../../deliveryInstructionAddressMap/base/DeliveryInstructionAddressMap";
import { DeliveryInstructionAddressMapWhereUniqueInput } from "../../deliveryInstructionAddressMap/base/DeliveryInstructionAddressMapWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DeliveryPartnerInstructionControllerBase {
  constructor(
    protected readonly service: DeliveryPartnerInstructionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryPartnerInstruction })
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDeliveryPartnerInstruction(
    @common.Body() data: DeliveryPartnerInstructionCreateInput
  ): Promise<DeliveryPartnerInstruction> {
    return await this.service.createDeliveryPartnerInstruction({
      data: data,
      select: {
        addDirectionToReachAudioUrl: true,
        addDirectionToReachInstruction: true,
        avoidCallingBool: true,
        avoidRingingBellBool: true,
        createdAt: true,
        id: true,
        leaveAtDoorBool: true,
        leaveWithSecurityBool: true,
        petAtHome: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryPartnerInstruction] })
  @ApiNestedQuery(DeliveryPartnerInstructionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deliveryPartnerInstructions(
    @common.Req() request: Request
  ): Promise<DeliveryPartnerInstruction[]> {
    const args = plainToClass(
      DeliveryPartnerInstructionFindManyArgs,
      request.query
    );
    return this.service.deliveryPartnerInstructions({
      ...args,
      select: {
        addDirectionToReachAudioUrl: true,
        addDirectionToReachInstruction: true,
        avoidCallingBool: true,
        avoidRingingBellBool: true,
        createdAt: true,
        id: true,
        leaveAtDoorBool: true,
        leaveWithSecurityBool: true,
        petAtHome: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryPartnerInstruction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deliveryPartnerInstruction(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput
  ): Promise<DeliveryPartnerInstruction | null> {
    const result = await this.service.deliveryPartnerInstruction({
      where: params,
      select: {
        addDirectionToReachAudioUrl: true,
        addDirectionToReachInstruction: true,
        avoidCallingBool: true,
        avoidRingingBellBool: true,
        createdAt: true,
        id: true,
        leaveAtDoorBool: true,
        leaveWithSecurityBool: true,
        petAtHome: true,
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
  @swagger.ApiOkResponse({ type: DeliveryPartnerInstruction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDeliveryPartnerInstruction(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput,
    @common.Body() data: DeliveryPartnerInstructionUpdateInput
  ): Promise<DeliveryPartnerInstruction | null> {
    try {
      return await this.service.updateDeliveryPartnerInstruction({
        where: params,
        data: data,
        select: {
          addDirectionToReachAudioUrl: true,
          addDirectionToReachInstruction: true,
          avoidCallingBool: true,
          avoidRingingBellBool: true,
          createdAt: true,
          id: true,
          leaveAtDoorBool: true,
          leaveWithSecurityBool: true,
          petAtHome: true,
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
  @swagger.ApiOkResponse({ type: DeliveryPartnerInstruction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDeliveryPartnerInstruction(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput
  ): Promise<DeliveryPartnerInstruction | null> {
    try {
      return await this.service.deleteDeliveryPartnerInstruction({
        where: params,
        select: {
          addDirectionToReachAudioUrl: true,
          addDirectionToReachInstruction: true,
          avoidCallingBool: true,
          avoidRingingBellBool: true,
          createdAt: true,
          id: true,
          leaveAtDoorBool: true,
          leaveWithSecurityBool: true,
          petAtHome: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/deliveryInstructionAddressMap")
  @ApiNestedQuery(DeliveryInstructionAddressMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "read",
    possession: "any",
  })
  async findDeliveryInstructionAddressMap(
    @common.Req() request: Request,
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput
  ): Promise<DeliveryInstructionAddressMap[]> {
    const query = plainToClass(
      DeliveryInstructionAddressMapFindManyArgs,
      request.query
    );
    const results = await this.service.findDeliveryInstructionAddressMap(
      params.id,
      {
        ...query,
        select: {
          addresses: {
            select: {
              id: true,
            },
          },

          deliveryPartnerInstruction: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/deliveryInstructionAddressMap")
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "update",
    possession: "any",
  })
  async connectDeliveryInstructionAddressMap(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput,
    @common.Body() body: DeliveryInstructionAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveryInstructionAddressMap: {
        connect: body,
      },
    };
    await this.service.updateDeliveryPartnerInstruction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/deliveryInstructionAddressMap")
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "update",
    possession: "any",
  })
  async updateDeliveryInstructionAddressMap(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput,
    @common.Body() body: DeliveryInstructionAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveryInstructionAddressMap: {
        set: body,
      },
    };
    await this.service.updateDeliveryPartnerInstruction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/deliveryInstructionAddressMap")
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "update",
    possession: "any",
  })
  async disconnectDeliveryInstructionAddressMap(
    @common.Param() params: DeliveryPartnerInstructionWhereUniqueInput,
    @common.Body() body: DeliveryInstructionAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveryInstructionAddressMap: {
        disconnect: body,
      },
    };
    await this.service.updateDeliveryPartnerInstruction({
      where: params,
      data,
      select: { id: true },
    });
  }
}
