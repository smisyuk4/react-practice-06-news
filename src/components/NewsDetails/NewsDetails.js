
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
// import { fakeApi } from "fakeApi";

import { PostWrp, PostDetails, Controls, ButtonStyled } from "./NewsDetails.styled";

export const NewsDetails = ()=>{
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        if (id===''){
          return
        }

        // const currentNews = fakeApi.find(item => {
        //     return item.id === Number(id)
        // })

        // setNews(currentNews)
    },[id])

    return(
      <PostWrp>
        <PostDetails>    
              <h3>{id}</h3>
              <a href="dfsdfsdf">link to page with details</a>
              <Controls>
                <ButtonStyled type="button">save</ButtonStyled>
                <ButtonStyled type="button">delete</ButtonStyled>
              </Controls>
        </PostDetails>
      </PostWrp>
    )
}