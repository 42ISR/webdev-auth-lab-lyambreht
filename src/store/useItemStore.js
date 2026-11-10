import { create } from "zustand"
import { api } from "../api/api"

export const useMessageStore = create((set) => ({
    items: [],
    
    getItems: async (own = false) => {
        try {
            const data = await
            set ({ items: data})
        } catch (error) {
            console.error(error)
        }
    },
}))