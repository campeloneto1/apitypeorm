import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Perfil } from "./perfil.model";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100,
        nullable: false
    })
    nome!: string;

    @Column({
        length: 11,
        nullable: false,
        unique: true
    })
    cpf!: string;

    @Column({
        length: 100,
        nullable: false
    })
    password!: string;

    @Column({
        length: 100,
        nullable: true,
        unique: true
    })
    email!: string;

    @ManyToOne(() => Perfil, (perfil) => perfil.users)
    perfil!: Perfil
}