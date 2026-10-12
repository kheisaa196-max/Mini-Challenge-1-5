import { BadRequestException, Injectable } from '@nestjs/common';
import { deretDto } from './dto/deret.bilangan.dto.js';

@Injectable()
export class DeretBilanganService {
    generateDeret(jenis: string, query: deretDto){
        const jenisBilangan = jenis?.toLowerCase()
        const jenisValid = ['ganjil', 'genap', 'kuadrat'];

        if(!jenisBilangan || !jenisValid.includes(jenisBilangan)){
            throw new BadRequestException('Jenis hanya boleh ganjil, genap, kuadrat')
        }

        const {jumlah, urutan ='asc'} = query;

        const data: number []=[];
        let total = 0;

        for (let i = 1; i<= jumlah; i++) {
           
            let nilai = 0;

            if(jenisBilangan === 'ganjil'){
                nilai = 2 * i -1;
            }else if(jenisBilangan ==='genap'){
                nilai = 2 * i;
            }else if(jenisBilangan ==='kuadrat'){
                nilai = i * i;
            }

            data.push(nilai);
            total += nilai;
        }

        const urutanBilangan = urutan?.toLowerCase();
        if(urutanBilangan ==='desc'){
            data.reverse();
        }

        return {
            jenis: jenisBilangan,
            jumlah: jumlah,
            data: data,
            total: total
        }
    }
}