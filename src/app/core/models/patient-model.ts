export class Patient {
    id!: number;
          nom!: string;
          prenom!: string;
          birthday!: Date;
          mail?:string;
          telephone?:string;
          imageUrl?: string;
          dateDebutSuivi?: Date;
          diagnostic?: string;
          objectif?: string;
          programme?: string;
          lastConsultation?: Date;
          note?: string;
        }