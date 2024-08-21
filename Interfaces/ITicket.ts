interface ITicket {
    id: number
    subject_id: number
    subject: ISubject
    title: string
    description: string
    file: string
    user_id: number
    user: IUser
    created_at: string
}

interface ISubject {
    id: number
    title: string
}

interface ITicketForm {
    subject: ISubject | null
    title: string
    description: string
    new_file: string
}