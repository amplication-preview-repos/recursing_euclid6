/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SettlementsBreakupWhereUniqueInput } from "../../settlementsBreakup/base/SettlementsBreakupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SettlementsBreakupUpdateManyWithoutPayoutCyclesInput {
  @Field(() => [SettlementsBreakupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SettlementsBreakupWhereUniqueInput],
  })
  connect?: Array<SettlementsBreakupWhereUniqueInput>;

  @Field(() => [SettlementsBreakupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SettlementsBreakupWhereUniqueInput],
  })
  disconnect?: Array<SettlementsBreakupWhereUniqueInput>;

  @Field(() => [SettlementsBreakupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SettlementsBreakupWhereUniqueInput],
  })
  set?: Array<SettlementsBreakupWhereUniqueInput>;
}

export { SettlementsBreakupUpdateManyWithoutPayoutCyclesInput as SettlementsBreakupUpdateManyWithoutPayoutCyclesInput };
