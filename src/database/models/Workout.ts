export interface Workout {
    id:          string;
    name:        string;
    mode:        string;
    equipment:   string[];
    exercises:   string[];
    createdAt:   Date;
    updatedAt:   Date;
    trainerTips: string[];
}


export type WorkoutFromRequest = Omit<Workout, 'id' | 'createdAt' | 'updatedAt'>;