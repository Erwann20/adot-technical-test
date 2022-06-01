export class DestinationDetail {
    countHabitant: number;
    countHotel: number;
    averageRevenue: number;
    area: number;


    constructor(countHabitant: number, countHotel: number, averageRevenue: number, area: number) {
        this.countHabitant = countHabitant;
        this.countHotel = countHotel;
        this.averageRevenue = averageRevenue;
        this.area = area;
    }
}