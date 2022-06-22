import { defineStore } from "pinia";
import { mockData } from "../mockData";


export const useSubjectStore = defineStore('subject', {
    state: () => {
        return { data: mockData }
    },
    actions: {
        // addSubject(subject: { name: string; grades: number[]; }) {
        //     this.data.push(subject);
        // },
        // updateSubject(subject: { name: string; grades: number[]; } | undefined) {
        //     this.data[this.data.findIndex(element => element.name === subject?.name)] = subject;
        // }

        addSubject(subject: any) {
            this.data.push(subject);
        }
    },

});