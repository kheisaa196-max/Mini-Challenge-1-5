import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export enum TempUnit {CELCIUS ='celsius', FAHRENHEIT ='fahrenheit', KELVIN ='kelvin'}
export class konversiDto{
    @IsNotEmpty()
    @IsNumber()
    nilai: number;

    @IsNotEmpty()
    @IsEnum(TempUnit)
    dari: string;

    @IsNotEmpty()
    @IsEnum(TempUnit)
    ke: string;
}