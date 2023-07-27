import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Pagination } from 'swiper/modules';
import Projects from './Projects';
import { projects } from '../constants/projects';

export default function Slider() {

  return (
    <>
      {/* <div className="slider-container"> */}
      <div></div>
      <Swiper 
              pagination={{ clickable: true }}
              modules={[Pagination]} 
              className="mySwiper">
          {
            projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Projects title = {project.title}
                          description={project.description}
                          tech={project.tech}
                          image={project.image}
                          link={project.link} 
                />
              </SwiperSlide>
            ))
          }
      </Swiper>
      {/* </div> */}
    </>
  );
}
