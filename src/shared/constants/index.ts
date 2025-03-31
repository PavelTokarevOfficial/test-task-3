import type {link, TCity, TDepartments, TEmployees, TShifts, TTeams} from "@/shared/types";

export const CITIES: TCity[] = [
    {id: "moscow", name: "Moscow"},
    {id: "london", name: "London"},
    {id: "new-york", name: "New York"},
    {id: "berlin", name: "Berlin"},
    {id: "paris", name: "Paris"},
];

export const DEPARTMENTS: TDepartments[] = [
    {id: "1", cityId: "moscow", name: "Цех 1"},
    {id: "2", cityId: "moscow", name: "Цех 2"},
    {id: "3", cityId: "moscow", name: "Цех 3"},
    {id: "4", cityId: "moscow", name: "Цех 4"},
    {id: "5", cityId: "moscow", name: "Цех 5"},
    {id: "6", cityId: "london", name: "Цех 6"},
    {id: "7", cityId: "london", name: "Цех 7"},
    {id: "8", cityId: "london", name: "Цех 8"},
    {id: "9", cityId: "london", name: "Цех 9"},
    {id: "10", cityId: "london", name: "Цех 10"},
    {id: "11", cityId: "new-york", name: "Цех 11"},
    {id: "12", cityId: "new-york", name: "Цех 12"},
    {id: "13", cityId: "new-york", name: "Цех 13"},
    {id: "14", cityId: "new-york", name: "Цех 14"},
    {id: "15", cityId: "new-york", name: "Цех 15"},
    {id: "16", cityId: "berlin", name: "Цех 16"},
    {id: "17", cityId: "berlin", name: "Цех 17"},
    {id: "18", cityId: "berlin", name: "Цех 18"},
    {id: "19", cityId: "paris", name: "Цех 19"},
    {id: "20", cityId: "paris", name: "Цех 20"},
];

export const EMPLOYEES: TEmployees[] = [
    {id: "e1", departmentId: "1", name: "Employee 1"},
    {id: "e2", departmentId: "1", name: "Employee 2"},
    {id: "e3", departmentId: "1", name: "Employee 3"},
    {id: "e4", departmentId: "1", name: "Employee 4"},
    {id: "e5", departmentId: "2", name: "Employee 5"},
    {id: "e6", departmentId: "2", name: "Employee 6"},
    {id: "e7", departmentId: "2", name: "Employee 7"},
    {id: "e8", departmentId: "2", name: "Employee 8"},
    {id: "e9", departmentId: "3", name: "Employee 9"},
    {id: "e10", departmentId: "3", name: "Employee 10"},
    {id: "e11", departmentId: "4", name: "Employee 11"},
    {id: "e12", departmentId: "4", name: "Employee 12"},
    {id: "e13", departmentId: "5", name: "Employee 13"},
    {id: "e14", departmentId: "5", name: "Employee 14"},
    {id: "e15", departmentId: "6", name: "Employee 15"},
    {id: "e16", departmentId: "6", name: "Employee 16"},
    {id: "e17", departmentId: "7", name: "Employee 17"},
    {id: "e18", departmentId: "7", name: "Employee 18"},
    {id: "e19", departmentId: "8", name: "Employee 19"},
    {id: "e20", departmentId: "8", name: "Employee 20"},
];

export const TEAMS: TTeams[] = [
    {id: "team-1", name: "Team 1"},
    {id: "team-2", name: "Team 2"},
    {id: "team-3", name: "Team 3"},
    {id: "team-4", name: "Team 4"},
    {id: "team-5", name: "Team 5"},
    {id: "team-6", name: "Team 6"},
    {id: "team-7", name: "Team 7"},
    {id: "team-8", name: "Team 8"},
];

export const SHIFTS: TShifts[] = [
    {id: "day", name: "Day"},
    {id: "night", name: "Night"},
];

export const links:link[] = [
    {
        name: "Форма",
        url: "/"
    },
    {
        name: "Список",
        url: "result"
    }
]