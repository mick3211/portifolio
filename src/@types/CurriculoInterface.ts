export interface CurriculoInterface {
    skills: {
        hardSkills: {
            name: string;
            experience: string;
            image: string;
            level: string;
            color: string;
            progress: number;
        }[];
        softSkills: string[];
    };
    languages: {
        language: string;
        level: string;
    }[];
    education: {
        title: string;
        university: string;
        level: string;
        startDate: string;
        endDate?: string;
    }[];
}
