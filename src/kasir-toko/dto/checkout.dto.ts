import { ArrayMaxSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsNumber, IsString, Min, Validate, ValidateNested } from "class-validator";

export class itemDto{
    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsNumber()
    @Min(1)
    harga: number;
    
    @IsInt()
    @Min(1)
    qty: number;
}

export class checkoutDto{
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMaxSize(10)
    @ValidateNested({ each: true })
    items: itemDto[];
}