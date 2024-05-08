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
import { GeofenceWhereUniqueInput } from "./GeofenceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GeofenceUpdateInput } from "./GeofenceUpdateInput";

@ArgsType()
class UpdateGeofenceArgs {
  @ApiProperty({
    required: true,
    type: () => GeofenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GeofenceWhereUniqueInput)
  @Field(() => GeofenceWhereUniqueInput, { nullable: false })
  where!: GeofenceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GeofenceUpdateInput,
  })
  @ValidateNested()
  @Type(() => GeofenceUpdateInput)
  @Field(() => GeofenceUpdateInput, { nullable: false })
  data!: GeofenceUpdateInput;
}

export { UpdateGeofenceArgs as UpdateGeofenceArgs };
