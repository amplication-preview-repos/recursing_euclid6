/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccountRestaurantLookupWhereUniqueInput } from "../../accountRestaurantLookup/base/AccountRestaurantLookupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccountRestaurantLookupUpdateManyWithoutAccountsInput {
  @Field(() => [AccountRestaurantLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountRestaurantLookupWhereUniqueInput],
  })
  connect?: Array<AccountRestaurantLookupWhereUniqueInput>;

  @Field(() => [AccountRestaurantLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountRestaurantLookupWhereUniqueInput],
  })
  disconnect?: Array<AccountRestaurantLookupWhereUniqueInput>;

  @Field(() => [AccountRestaurantLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountRestaurantLookupWhereUniqueInput],
  })
  set?: Array<AccountRestaurantLookupWhereUniqueInput>;
}

export { AccountRestaurantLookupUpdateManyWithoutAccountsInput as AccountRestaurantLookupUpdateManyWithoutAccountsInput };
