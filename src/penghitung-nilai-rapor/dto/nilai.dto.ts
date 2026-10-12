import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class nilaiDto{
    @IsNotEmpty()
    @IsString()
    nama: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    tugas: number[];

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    uts: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    uas: number;
}