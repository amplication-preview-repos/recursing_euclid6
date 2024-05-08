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
import { OptionsVarientsItemWhereUniqueInput } from "./OptionsVarientsItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OptionsVarientsItemUpdateInput } from "./OptionsVarientsItemUpdateInput";

@ArgsType()
class UpdateOptionsVarientsItemArgs {
  @ApiProperty({
    required: true,
    type: () => OptionsVarientsItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptionsVarientsItemWhereUniqueInput)
  @Field(() => OptionsVarientsItemWhereUniqueInput, { nullable: false })
  where!: OptionsVarientsItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OptionsVarientsItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => OptionsVarientsItemUpdateInput)
  @Field(() => OptionsVarientsItemUpdateInput, { nullable: false })
  data!: OptionsVarientsItemUpdateInput;
}

export { UpdateOptionsVarientsItemArgs as UpdateOptionsVarientsItemArgs };
