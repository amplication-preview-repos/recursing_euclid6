/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryPartnerInstructionWhereInput } from "./DeliveryPartnerInstructionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryPartnerInstructionOrderByInput } from "./DeliveryPartnerInstructionOrderByInput";

@ArgsType()
class DeliveryPartnerInstructionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryPartnerInstructionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DeliveryPartnerInstructionWhereInput, { nullable: true })
  @Type(() => DeliveryPartnerInstructionWhereInput)
  where?: DeliveryPartnerInstructionWhereInput;

  @ApiProperty({
    required: false,
    type: [DeliveryPartnerInstructionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DeliveryPartnerInstructionOrderByInput], { nullable: true })
  @Type(() => DeliveryPartnerInstructionOrderByInput)
  orderBy?: Array<DeliveryPartnerInstructionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeliveryPartnerInstructionFindManyArgs as DeliveryPartnerInstructionFindManyArgs };
