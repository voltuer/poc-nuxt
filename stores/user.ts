import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    age: 0
  }),

  getters: {
    getFullInfo: (state) => {
      if (state.name && state.age > 0) {
        return `${state.name}, ${state.age} años`
      }
      return 'Información incompleta'
    },

    isAdult: (state) => state.age >= 18
  },

  actions: {
    initFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const storedName = localStorage.getItem('name')
        if (storedName) {
          this.name = storedName
        }
        const storedAge = localStorage.getItem('age')
        if (storedAge) {
          this.age = parseInt(storedAge, 10)
        }
      }
    },

    setName(newName: string) {
      this.name = newName
      if (typeof window !== 'undefined') {
        localStorage.setItem('name', newName)
      }
    },

    setAge(newAge: number) {
      if (newAge >= 0) {
        this.age = newAge
          localStorage.setItem('age', newAge.toString())
      }
    },

    updateUser(name: string, age: number) {
      this.name = name
      this.age = age
      if (typeof window !== 'undefined') {
        localStorage.setItem('name', name)
      }
    },

    resetUser() {
      this.name = ''
      this.age = 0
      if (typeof window !== 'undefined') {
        localStorage.removeItem('name')
      }
    }
  }
})
