import { defineStore } from "pinia";
import { mockData } from "../mockData";


export const useSubjectStore = defineStore('subject', {
    state: () => {
        return { data: mockData }
    },
    actions: {
        addSubject(subject: { id: string; name: string; grades: { id: string; number: number; }[]; }) {
            this.data.push(subject);
        },

        updateSubject(subject: any) {
            this.data[this.data.findIndex(element => element.name === subject?.name)] = subject;
        }
    },

});