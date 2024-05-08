/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Coupon } from "../../coupon/base/Coupon";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { DiscountMenuItem } from "../../discountMenuItem/base/DiscountMenuItem";
import { DiscountType } from "../../discountType/base/DiscountType";
import { DiscountWindowMap } from "../../discountWindowMap/base/DiscountWindowMap";
import { Decimal } from "decimal.js";

@ObjectType()
class Discount {
  @ApiProperty({
    required: false,
    type: () => [Coupon],
  })
  @ValidateNested()
  @Type(() => Coupon)
  @IsOptional()
  coupons?: Array<Coupon>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [DiscountMenuItem],
  })
  @ValidateNested()
  @Type(() => DiscountMenuItem)
  @IsOptional()
  discountMenuItem?: Array<DiscountMenuItem>;

  @ApiProperty({
    required: true,
    type: () => DiscountType,
  })
  @ValidateNested()
  @Type(() => DiscountType)
  discountType?: DiscountType;

  @ApiProperty({
    required: false,
    type: () => [DiscountWindowMap],
  })
  @ValidateNested()
  @Type(() => DiscountWindowMap)
  @IsOptional()
  discountWindowMap?: Array<DiscountWindowMap>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  expirationDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxDiscount!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumOrderValue!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeOfDiscount!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  value!: Decimal | null;
}

export { Discount as Discount };
