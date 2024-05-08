/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { NotificationSettingWhereUniqueInput } from "../../notificationSetting/base/NotificationSettingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class NotificationSettingUpdateManyWithoutAppUsersInput {
  @Field(() => [NotificationSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationSettingWhereUniqueInput],
  })
  connect?: Array<NotificationSettingWhereUniqueInput>;

  @Field(() => [NotificationSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationSettingWhereUniqueInput],
  })
  disconnect?: Array<NotificationSettingWhereUniqueInput>;

  @Field(() => [NotificationSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NotificationSettingWhereUniqueInput],
  })
  set?: Array<NotificationSettingWhereUniqueInput>;
}

export { NotificationSettingUpdateManyWithoutAppUsersInput as NotificationSettingUpdateManyWithoutAppUsersInput };
