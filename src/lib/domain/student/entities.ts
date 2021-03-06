export interface IStudent {
    name:string | undefined;
    email:string | undefined;
}

export interface IStudentDetailedIds extends IStudent {
    universityId:number | undefined;
    studyProgramId:number | undefined;
}

export interface IStudentWithPassword extends IStudentDetailedIds {
    passwordHash: string;
}

export interface IUniversity {
    id: number,
    name: string,
    location: string
} 

export interface IStudyProgram {
    id: number,
    name: string
}

export interface IStudentDetailed extends IStudent {
    university: IUniversity,
    studyprogram: IStudyProgram
}