export class Education {
    constructor(
        public title: string,
        public startDate: Date,
        public endDate: Date,
        public university: string,
        public departement: string,
        public mention: string,


    ) {
        this.title = '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.university = '';
        this.departement = '';
        this.mention = '';
    }
}
