import { Injectable } from '@nestjs/common';
import { nilaiDto } from './dto/nilai.dto.js';

@Injectable()
export class PenghitungNilaiRaporService {

    hitungRapor(dto: nilaiDto){
        const{nama, tugas, uts, uas}= dto;

        const totalTugas = tugas.reduce((sum, n) => sum + n, 0);
        const rataTugas = totalTugas / tugas.length;

        const hitungAkhir = (0.3 * rataTugas) + (0.3 * uts) + (0.4 * uas);
        const nilaiAkhir = Math.round(hitungAkhir*100) / 100;

        let predikat: string;
        if(nilaiAkhir >= 90){
            predikat = 'A';
        }else if(nilaiAkhir >= 80){
            predikat = 'B';
        }else if(nilaiAkhir >= 70){
            predikat = 'C';
        }else{
            predikat = 'D';
        }

        const status = nilaiAkhir >= 75? 'Lulus' : 'Remedial';
        return {
            nama: nama.trim(),
            rataTugas: Math.round(rataTugas * 100) / 100,
            nilaiAkhir: nilaiAkhir,
            predikat: predikat,
            status: status
        }
    }
}
