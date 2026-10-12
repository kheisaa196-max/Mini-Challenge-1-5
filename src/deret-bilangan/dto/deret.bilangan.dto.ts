import { IsEnum, IsInt, IsNotEmpty, IsOptional, Max, Min } from "class-validator";

export enum urutan{ASC ='asc', DESC ='desc'}

export class deretDto{
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(20)

    jumlah: number;

    @IsOptional()
    @IsEnum(urutan)
    urutan?: string;
}