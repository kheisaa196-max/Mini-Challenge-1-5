import { IsEnum, IsInt, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class angkaDto {
    @IsNumber()
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(100)

    angka: number;
}