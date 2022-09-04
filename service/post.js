import { API } from "./apiConfig";
import { schemaQueries } from "./schema/schemaQueries";

const { post } = schemaQueries;

export const getAllPost = () => API.get(post.GET_ALL_POST);
