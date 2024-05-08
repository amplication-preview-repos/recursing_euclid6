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
import { Subscription } from "./Subscription";
import { SubscriptionCountArgs } from "./SubscriptionCountArgs";
import { SubscriptionFindManyArgs } from "./SubscriptionFindManyArgs";
import { SubscriptionFindUniqueArgs } from "./SubscriptionFindUniqueArgs";
import { CreateSubscriptionArgs } from "./CreateSubscriptionArgs";
import { UpdateSubscriptionArgs } from "./UpdateSubscriptionArgs";
import { DeleteSubscriptionArgs } from "./DeleteSubscriptionArgs";
import { CustomerSubscriptionFindManyArgs } from "../../customerSubscription/base/CustomerSubscriptionFindManyArgs";
import { CustomerSubscription } from "../../customerSubscription/base/CustomerSubscription";
import { AppUser } from "../../appUser/base/AppUser";
import { SubscriptionPlan } from "../../subscriptionPlan/base/SubscriptionPlan";
import { SubscriptionService } from "../subscription.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Subscription)
export class SubscriptionResolverBase {
  constructor(
    protected readonly service: SubscriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async _subscriptionsMeta(
    @graphql.Args() args: SubscriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Subscription])
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async subscriptions(
    @graphql.Args() args: SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    return this.service.subscriptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Subscription, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "own",
  })
  async subscription(
    @graphql.Args() args: SubscriptionFindUniqueArgs
  ): Promise<Subscription | null> {
    const result = await this.service.subscription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Subscription)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "create",
    possession: "any",
  })
  async createSubscription(
    @graphql.Args() args: CreateSubscriptionArgs
  ): Promise<Subscription> {
    return await this.service.createSubscription({
      ...args,
      data: {
        ...args.data,

        appUsers: {
          connect: args.data.appUsers,
        },

        subscriptionPlans: {
          connect: args.data.subscriptionPlans,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Subscription)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  async updateSubscription(
    @graphql.Args() args: UpdateSubscriptionArgs
  ): Promise<Subscription | null> {
    try {
      return await this.service.updateSubscription({
        ...args,
        data: {
          ...args.data,

          appUsers: {
            connect: args.data.appUsers,
          },

          subscriptionPlans: {
            connect: args.data.subscriptionPlans,
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

  @graphql.Mutation(() => Subscription)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "delete",
    possession: "any",
  })
  async deleteSubscription(
    @graphql.Args() args: DeleteSubscriptionArgs
  ): Promise<Subscription | null> {
    try {
      return await this.service.deleteSubscription(args);
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
  @graphql.ResolveField(() => [CustomerSubscription], {
    name: "customerSubscriptions",
  })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "read",
    possession: "any",
  })
  async findCustomerSubscriptions(
    @graphql.Parent() parent: Subscription,
    @graphql.Args() args: CustomerSubscriptionFindManyArgs
  ): Promise<CustomerSubscription[]> {
    const results = await this.service.findCustomerSubscriptions(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AppUser, {
    nullable: true,
    name: "appUsers",
  })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  async getAppUsers(
    @graphql.Parent() parent: Subscription
  ): Promise<AppUser | null> {
    const result = await this.service.getAppUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SubscriptionPlan, {
    nullable: true,
    name: "subscriptionPlans",
  })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "read",
    possession: "any",
  })
  async getSubscriptionPlans(
    @graphql.Parent() parent: Subscription
  ): Promise<SubscriptionPlan | null> {
    const result = await this.service.getSubscriptionPlans(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
