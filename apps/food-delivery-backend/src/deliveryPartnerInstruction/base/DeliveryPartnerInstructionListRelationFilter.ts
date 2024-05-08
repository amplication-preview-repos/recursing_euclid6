/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryPartnerInstructionWhereInput } from "./DeliveryPartnerInstructionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeliveryPartnerInstructionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DeliveryPartnerInstructionWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryPartnerInstructionWhereInput)
  @IsOptional()
  @Field(() => DeliveryPartnerInstructionWhereInput, {
    nullable: true,
  })
  every?: DeliveryPartnerInstructionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryPartnerInstructionWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryPartnerInstructionWhereInput)
  @IsOptional()
  @Field(() => DeliveryPartnerInstructionWhereInput, {
    nullable: true,
  })
  some?: DeliveryPartnerInstructionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryPartnerInstructionWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryPartnerInstructionWhereInput)
  @IsOptional()
  @Field(() => DeliveryPartnerInstructionWhereInput, {
    nullable: true,
  })
  none?: DeliveryPartnerInstructionWhereInput;
}
export { DeliveryPartnerInstructionListRelationFilter as DeliveryPartnerInstructionListRelationFilter };
