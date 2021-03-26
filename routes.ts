import { toolGetTag } from "./controllers/getToolsTag";
import { toolCreate } from "./controllers/createTools";
import { toolGetAll } from "./controllers/getTools";
import { toolDelete } from "./controllers/deleteTool";


/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/tools",
        method: "get",
        action: toolGetAll
    },
    {
        path: "/tools/:tag",
        method: "get",
        action: toolGetTag
    },
    {
        path: "/tools",
        method: "post",
        action: toolCreate
    },
    {
        path: "/tools/:id",
        method: "delete",
        action: toolDelete
    }
];