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
import { UsersHashtagsMapWhereInput } from "./UsersHashtagsMapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UsersHashtagsMapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UsersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => UsersHashtagsMapWhereInput, {
    nullable: true,
  })
  every?: UsersHashtagsMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => UsersHashtagsMapWhereInput, {
    nullable: true,
  })
  some?: UsersHashtagsMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => UsersHashtagsMapWhereInput, {
    nullable: true,
  })
  none?: UsersHashtagsMapWhereInput;
}
export { UsersHashtagsMapListRelationFilter as UsersHashtagsMapListRelationFilter };
