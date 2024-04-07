import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

// toolkit ile birlikte slice'daki state'de tutlan herhangi bir veriyi doğrudan güncellyebiliyoruz. buda örneğin dizideki bir elelamnı güncellememi gerektiğinde map yerine splice ekleme gerektiğinde concat yerine push gişbi methodları kullanmamızın önünü açıcak

const initialState = {
  tasks: [
    {
      title: 'Navbar Animasyonu',
      author: 'Furkan',
      assigned_to: 'Ali',
      end_date: '2024-04-12',
      id: 'b6f04e4c-fc73-4b36-ab27-ec6ae968b042',
    },
    {
      title: 'Header Düzenlemesi',
      author: 'Ayşe',
      assigned_to: 'Fatma',
      end_date: '2024-05-15',
      id: '29d3372f-7848-4aaf-8694-b6fab599fe1e',
    },
    {
      title: 'Sayfa Dizaynı',
      author: 'Fatma',
      assigned_to: 'Ali',
      end_date: '2024-07-13',
      id: 'd5568f07-9897-4fc4-8554-b120d0ee4678',
    },
  ],
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // a) task'e id ekle
      action.payload.id = v4();

      // b) veriyi diziyi ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // 1.Yöntem Filter
      // const filtred = state.tasks.filter(
      //   (tasks) => tasks.id !== action.payload
      // );

      // state.tasks = filtred;

      // 2.Yöntem Splice
      //a) silincek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      //b) elemanı sil
      state.tasks.splice(index, 1);
    },

    editTask: (state, action) => {
      // düzenlenicek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      // elemanı güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

// store'a tanıtmak için reducer'ı export et
export default crudSlice.reducer;

// projede kullanbilmek için aksiyonları export et
export const { addTask, deleteTask, editTask } = crudSlice.actions;
