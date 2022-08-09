import About from "../pages/About";
import Generator from "../pages/Generator";

export const publicRoutes = [
    {path: '/*', element: <About/>, exact: false},
    {path: '/generator', element: <Generator/>, exact: false},
]