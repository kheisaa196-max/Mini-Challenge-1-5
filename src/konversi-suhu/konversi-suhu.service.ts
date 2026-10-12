import { BadRequestException, Injectable } from '@nestjs/common';
import { konversiDto } from './dto/konversi.suhu.dto.js';

@Injectable()
export class KonversiSuhuService {

     konversiSuhu(dto: konversiDto){
       const { nilai, dari, ke } =dto
 
       const satuanDari = dari.toLowerCase();
       const satuanKe = ke.toLowerCase();

       if(satuanDari === satuanKe){
        throw new BadRequestException('satuan asal dan tujuan tidak boleh sama')
       }

       if(satuanDari === 'kelvin' && nilai < 0){
        throw new BadRequestException('Nilai kelvin tidak boleh kurang dari 0')
       }

       let celsius = 0;

       if(satuanDari === 'celsius'){
        celsius = nilai;
       }else if(satuanDari === 'fahrenheit'){
        celsius = ((nilai - 32) * 5) / 9;
       }else if(satuanDari === 'kelvin'){
        celsius = nilai - 273.15;
       }

       let hasilKonversi = celsius;

       if(satuanKe === 'celsius'){
        hasilKonversi = celsius;
       }else if(satuanKe === 'fahrenheit'){
        hasilKonversi = (celsius * 9 / 5) + 32;
       }else if(satuanKe === 'kelvin'){
        hasilKonversi = celsius + 273.15;
       }

       const hasilAkhir = Math.round(hasilKonversi * 100)/100;

       return {
        nilaiAsal: nilai,
        satuanAsal: satuanDari,
        hasil: hasilAkhir,
        satuanHasil: satuanKe
       }

        }
    } 