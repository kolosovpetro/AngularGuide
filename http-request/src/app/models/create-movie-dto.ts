export class CreateMovieDto {
    // @ts-ignore
    title: string;

    // @ts-ignore
    year: number;

    // @ts-ignore
    ageRestriction: number;

    // @ts-ignore
    price: number;


    constructor(title: string, year: number, ageRestriction: number, price: number) {
        this.title = title;
        this.year = year;
        this.ageRestriction = ageRestriction;
        this.price = price;
    }
}
