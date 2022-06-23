import { defineStore } from "pinia";
import { mockData } from "../mockData";


export const useSubjectStore = defineStore('subject', {
    state: () => {
        return { data: mockData }
    },
    actions: {
        addSubject(subject: any) {
            this.data.push(subject);
        },

        updateSubject(subject: any) {
            this.data[this.data.findIndex(element => element.name === subject?.name)] = subject;
        }
    },
    persist: {
        enabled: true
    }

});