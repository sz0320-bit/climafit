import { Router } from 'express';




// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //



// // // Get all users
// // userRouter.get(Paths.Users.Get, UserRoutes.getAll);
// // userRouter.post(Paths.Users.Add, UserRoutes.add);
// // userRouter.put(Paths.Users.Update, UserRoutes.update);
// // userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

// // // Add UserRouter

const clothingItemRouter = Router();

clothingItemRouter.get('/', (req, res) => {
    return res.json([
        {
            test: 'test'
        },
        {
            test: 'test2'
        },
    ])
})


apiRouter.use('clothing-items', clothingItemRouter);


// **** Export default **** //

export default apiRouter;
