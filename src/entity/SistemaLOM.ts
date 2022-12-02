import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaLOM {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cor: string

    @Column()
    quantidade: number

    @Column()
    preco: string

}