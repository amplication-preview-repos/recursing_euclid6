/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContactDetailWhereUniqueInput } from "../../contactDetail/base/ContactDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContactDetailUpdateManyWithoutAddressesInput {
  @Field(() => [ContactDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactDetailWhereUniqueInput],
  })
  connect?: Array<ContactDetailWhereUniqueInput>;

  @Field(() => [ContactDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactDetailWhereUniqueInput],
  })
  disconnect?: Array<ContactDetailWhereUniqueInput>;

  @Field(() => [ContactDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactDetailWhereUniqueInput],
  })
  set?: Array<ContactDetailWhereUniqueInput>;
}

export { ContactDetailUpdateManyWithoutAddressesInput as ContactDetailUpdateManyWithoutAddressesInput };
