import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface Counting {
    count: number
    increment: ()=> void
    resetCount: ()=> void
}

const useCount = create<Counting>()((set)=>({
    count : 0 , 
    increment : ()=> set((state)=>({count: state.count + 1})),
    resetCount : ()=> set({count: 0})
    
}))

export default useCount;