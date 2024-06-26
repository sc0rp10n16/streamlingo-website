"use server"

import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api";

const createWaitlist =useMutation(api.waitlists.createWaitlist)

export const onSubmit(e){
  
}
