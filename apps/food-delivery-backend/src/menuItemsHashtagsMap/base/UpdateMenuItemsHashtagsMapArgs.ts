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
import { MenuItemsHashtagsMapWhereUniqueInput } from "./MenuItemsHashtagsMapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemsHashtagsMapUpdateInput } from "./MenuItemsHashtagsMapUpdateInput";

@ArgsType()
class UpdateMenuItemsHashtagsMapArgs {
  @ApiProperty({
    required: true,
    type: () => MenuItemsHashtagsMapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMapWhereUniqueInput)
  @Field(() => MenuItemsHashtagsMapWhereUniqueInput, { nullable: false })
  where!: MenuItemsHashtagsMapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuItemsHashtagsMapUpdateInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMapUpdateInput)
  @Field(() => MenuItemsHashtagsMapUpdateInput, { nullable: false })
  data!: MenuItemsHashtagsMapUpdateInput;
}

export { UpdateMenuItemsHashtagsMapArgs as UpdateMenuItemsHashtagsMapArgs };
