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
import { AccountWhereInput } from "./AccountWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccountListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccountWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereInput)
  @IsOptional()
  @Field(() => AccountWhereInput, {
    nullable: true,
  })
  every?: AccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereInput)
  @IsOptional()
  @Field(() => AccountWhereInput, {
    nullable: true,
  })
  some?: AccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereInput)
  @IsOptional()
  @Field(() => AccountWhereInput, {
    nullable: true,
  })
  none?: AccountWhereInput;
}
export { AccountListRelationFilter as AccountListRelationFilter };
