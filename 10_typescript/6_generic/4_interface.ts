// interfacelerde generic kullanımı
interface IRepo<T> {
  getById: (id: number) => T;
  getAll(): T[];
  createRepo: (item: T) => void;
}

// bir github reposu tipi tanımlayalım
interface IRepoInfo {
  repo_name: string;
  id: number;
  stars: number;
}

const userRepo: IRepo<IRepoInfo> = {
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
