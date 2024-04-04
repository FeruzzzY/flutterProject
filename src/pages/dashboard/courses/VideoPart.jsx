import React from "react";
import Back from "../../../components/Back";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../../../redux";
import { useState } from "react";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import VideoPlayer from "../../../components/dashboard/courses/course_single/course_video/VideoPlayer";

const VideoPart = () => {
  const [videoObj, setVideoObj] = useState({});
  const dispatch = useDispatch();
  const { courses_id, c_child_s_id } = useParams();

  //get functions
  useEffect(() => {
    getVideoPart();
  }, [c_child_s_id, courses_id]);

  const getVideoPart = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`/api/v1/course/lesson?id=${c_child_s_id}&course_id=${courses_id}`)
      .then((res) => {
        let data = res?.data?.data;
        setVideoObj(data);
      })
      .catch((error) => {
        setVideoObj({});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
  return (
    <div>
      <Back link="/dashboard/courses" />
      <div>
        {videoObj?.video_link?.playlist ? (
          <VideoPlayer
            name={videoObj?.name}
            video={videoObj?.video_link?.playlist}
            description={videoObj?.desc}
            lessonId={c_child_s_id}
          />
        ) : null}
      </div>
    </div>
  );
};

export default VideoPart;
