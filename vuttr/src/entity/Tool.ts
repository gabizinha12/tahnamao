import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Tool")
export class Tool {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    link!: string;

    @Column()
    description!: string;

    @Column("simple-array")
    tags!: string[];

}
