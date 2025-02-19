import {mutation} from "./_generated/server"
import {convexToJson, v} from "convex/values"

export const createRegistration = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        idea:v.string(),
        year:v.string()
    },
    handler:async(ctx,args)=>{
        await ctx.db.insert("Registration",{
            name:args.name,
            email:args.email,
            idea:args.idea,
            year:args.year
        })
    }
}) 