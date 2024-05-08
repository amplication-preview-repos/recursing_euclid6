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
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HashtagWhereUniqueInput } from "../../hashtag/base/HashtagWhereUniqueInput";

@InputType()
class UsersHashtagsMapCreateInput {
  @ApiProperty({
    required: true,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @Field(() => AppUserWhereUniqueInput)
  appUsers!: AppUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HashtagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HashtagWhereUniqueInput)
  @Field(() => HashtagWhereUniqueInput)
  hashtags!: HashtagWhereUniqueInput;
}

export { UsersHashtagsMapCreateInput as UsersHashtagsMapCreateInput };
