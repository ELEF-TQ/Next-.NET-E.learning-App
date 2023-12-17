'use client'
import Certificate from "@/components/Certficate"
import getUserFromLocalStorage from "@/utils/getLocalUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChapter } from "@/context/ChapterSlice";
import { AppDispatch } from "@/context/store";
const page = () => {

    const dispatch = useDispatch<AppDispatch>();
    const user = getUserFromLocalStorage();
    useEffect(() => {
        if (user) {
          dispatch(getChapter(1));
        } else {
          window.location.href = 'auth/login';
        }
      }, [dispatch]);
  return (
    <div>
      <Certificate username={user.username}/>
    </div>
  )
}

export default page

