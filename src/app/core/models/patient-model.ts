export class Patient {
    id!: number;
          nom!: string;
          prenom!: string;
          birthday!: string;
          mail?:string;
          telephone?:string;
          imageUrl?: string;
          datedebutsuivi?: Date;
          diagnostic?: string;
          objectif?: string;
          programme?: string;
          dateconsultation?: Date;
          note?: string;
        }