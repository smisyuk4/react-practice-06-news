import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout";
import { News } from "components/News";
import { NewsDetails } from "components/NewsDetails";
import { Home, SavedPosts, NotFound} from "../../pages"

export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="news" element={<News/>}>
          <Route path=":id" element={<NewsDetails />}/>   
        </Route>     
        <Route path="saved-posts" element={<SavedPosts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
   </Routes>
  );
};
