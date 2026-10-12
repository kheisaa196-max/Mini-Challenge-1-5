import { BadRequestException, Injectable } from '@nestjs/common';
import { itemDto } from './dto/checkout.dto.js';

@Injectable()
export class KasirTokoService {

  validasiItems(items: itemDto[]): void{

    if(!Array.isArray(items)){
        throw new BadRequestException('Items harus berupa array')
    }
    if(items.length === 0){
        throw new BadRequestException('Items tidak boleh kosong')
    }
    if(items.length > 10){
        throw new BadRequestException('Maksimal 10 item')
    }

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const nomorUrut = i + 1;

        if(!item || typeof item !== 'object'){
            throw new BadRequestException(`Item ke-${nomorUrut}: item tidak valid`)
        }
        if(!item.nama || typeof item.nama !== 'string' || item.nama.trim() ===''){
            throw new BadRequestException(`Item ke-${nomorUrut}: nama tidak boleh kosong`)
        }
        if(typeof item.harga !== 'number' || item.harga <= 0){
            throw new BadRequestException(`Item ke-${nomorUrut}: harga harus lebih dari 0`)
        }
        if(typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0){
            throw new BadRequestException(`Item ke-${nomorUrut}: qty harus bilangan bulat lebih dari 0`)
        } 
    }
  }  
  hitungTotal(member: string, metode: string, items: itemDto[]){
    const normalMember = member.toLowerCase()
    const diskonMember: Record<string, number>= {reguler: 0, silver: 5, gold: 10}

    if(!(normalMember in diskonMember)){
        throw new BadRequestException('Member hanya boleh reguler, silver, atau gold')
    }
    const metodeMember = metode.toLowerCase()
    if(metodeMember !== 'tunai' && metodeMember !=='qris'){
        throw new BadRequestException('Metode hanya boleh tunai atau qris')
    }

    let subtotal = 0;
    let totalItem = 0;

    const rincian =items.map((item) =>{
        const subtotalItem = item.harga * item.qty
        subtotal += subtotalItem
        totalItem += item.qty

       return{
        nama: item.nama,
        harga: item.harga,
        qty: item.qty,
        subtotal: subtotalItem
       } 
    })
    const diskon = (subtotal * diskonMember[normalMember]) / 100;
    let biayaAdmin = 0;
    if(metodeMember === 'qris'){
        biayaAdmin = (subtotal - diskon) * 1 / 100
    }
    const total = subtotal - diskon + biayaAdmin

    return{
        member: normalMember,
        metode: metodeMember,
        rincian,
        totalItem,
        subtotal: subtotal, 
        diskon,
        biayaAdmin,
        total
    }
  }
}
