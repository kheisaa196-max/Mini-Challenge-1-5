import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class BilanganService {

    getBilangan(angka: number): any{
        if(!Number.isInteger(angka) || angka < 1 || angka > 100) {
            throw new BadRequestException('Angka harus berupa bilangan bulat  antara 1 sampai 100')
        }
        
        let jenis: string= '';
        if(angka % 2 === 0){
            jenis ='genap';
        }else{
            jenis ='ganjil';
        }

        const kuadrat = angka * angka;

        const kelipatanLima = angka % 5 === 0

        const hasil ={
            angka: angka,
            jenis: jenis,
            kuadrat: kuadrat,
            kelipatanLima: kelipatanLima
        }
        return hasil;
    }
}
