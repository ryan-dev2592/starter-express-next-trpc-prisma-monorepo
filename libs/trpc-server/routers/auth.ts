import {publicProcedure, router} from '../trpc'
import {prisma} from "@express-prisma-trpc-next/db"

export const authRoutes = router({
    users: publicProcedure.query(() => prisma.user.findMany())
})