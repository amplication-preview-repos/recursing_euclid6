/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OptionsAddonsGroupWhereUniqueInput } from "../../optionsAddonsGroup/base/OptionsAddonsGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput {
  @Field(() => [OptionsAddonsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OptionsAddonsGroupWhereUniqueInput],
  })
  connect?: Array<OptionsAddonsGroupWhereUniqueInput>;

  @Field(() => [OptionsAddonsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OptionsAddonsGroupWhereUniqueInput],
  })
  disconnect?: Array<OptionsAddonsGroupWhereUniqueInput>;

  @Field(() => [OptionsAddonsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OptionsAddonsGroupWhereUniqueInput],
  })
  set?: Array<OptionsAddonsGroupWhereUniqueInput>;
}

export { OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput as OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput };
