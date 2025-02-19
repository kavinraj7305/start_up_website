import {defineSchema,defineTable} from "convex/server"
import {v} from "convex/values"


export default defineSchema({
    Registration:defineTable({
        name:v.string(),
        email:v.string(),
        idea:v.string(),
        year:v.string()
    })
})