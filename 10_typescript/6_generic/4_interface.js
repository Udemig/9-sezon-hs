"use strict";
const userRepo = {
    getById(id) {
        return {
            repo_name: "hesap makinası",
            id: 23,
            stars: 23,
        };
    },
    getAll() {
        return [
            {
                repo_name: "hesap makinası",
                id: 9,
                stars: 23,
            },
            {
                repo_name: "web sitesi",
                id: 13,
                stars: 41,
            },
        ];
    },
    createRepo(item) {
        console.log("repo oluşturuluyoe");
    },
};
