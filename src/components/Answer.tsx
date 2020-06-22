import React from 'react';

export const Answer = (props: IAnswer) => {

    return (
        <div>

        </div>
    )
}

export interface IAnswer {
    text: string;
    images?: string;
    // questionId?: string;
    isCorrect: boolean;
    type: "essay" | "mcq";
    tables?: {
        tableHeader?: string[];
        tableData?: string[];
    }
}
