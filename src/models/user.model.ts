import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm";
import Perfil from "./perfil.model";
import Bcrypt from '../utilities/bcrypt';

@Entity("users")
export default class User{
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

    @BeforeInsert()
    async hashPassword() {
        this.password = await Bcrypt.hashString(this.cpf);
    }
}