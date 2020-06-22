import React from 'react';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const Question = () => {

    return (
    <form noValidate autoComplete="off">
            <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="mcq"
          control={<Radio color="primary" />}
          label="MCQ"
          labelPlacement="start"
        />
        <FormControlLabel
          value="essay"
          control={<Radio color="primary" />}
          label="Essay"
          labelPlacement="start"
        />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </RadioGroup>
        </FormControl>
    </form>
    )
}

export interface IQuestion {
    type: "essay" | "mcq";
    year: number;
    // subjectId: number;
    topicId: number;
    difficulty?: "beginner" | "intermediate" | "advanced";
    text: string;
    images?: string[];
    tables?: {
        tableHeader: string[];
        tableData: string[];
    }[];
    subquestion?: {
        superId: string;
        index: number;
    }
    // SuperQuestionId?: string;
}