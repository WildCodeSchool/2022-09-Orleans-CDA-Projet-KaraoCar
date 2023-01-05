export default interface SearchCriteria {
    departure?: string;
    destination?: string;
    dateDeparture?: string;
    nbPassengers?: number;
    musicalChoice?: {
        id: number;
        name: string;
    }
}