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
import { NotificationSettingWhereInput } from "./NotificationSettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NotificationSettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NotificationSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationSettingWhereInput)
  @IsOptional()
  @Field(() => NotificationSettingWhereInput, {
    nullable: true,
  })
  every?: NotificationSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotificationSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationSettingWhereInput)
  @IsOptional()
  @Field(() => NotificationSettingWhereInput, {
    nullable: true,
  })
  some?: NotificationSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotificationSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationSettingWhereInput)
  @IsOptional()
  @Field(() => NotificationSettingWhereInput, {
    nullable: true,
  })
  none?: NotificationSettingWhereInput;
}
export { NotificationSettingListRelationFilter as NotificationSettingListRelationFilter };
