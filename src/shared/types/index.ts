export type TListItem = {
    city: string
    workshop: string
    employee: string
    brigade: string
    shift: string
}

export type TCity = {
    id: string
    name: string
}

export type TDepartments = {
    id: string
    cityId: TCity['id']
    name: string
}

export type TEmployees = {
    id: string
    departmentId: TDepartments['id']
    name: string
}

export type TTeams = {
    id: string
    name: string
}

export type TShifts = {
    id: string
    name: string
}

export type link = {
    name: string,
    url: string
}