import React, {FC} from "react";
import { IPromo } from "../../../types/types";
import Promo from "../promo/promo";
import { SliderSection, StyledSwiper } from "./styles";

import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

interface PromoProps {
  infos: IPromo[];
}

const PromoList: FC<PromoProps> = ({infos}) => {
  return(infos?.length ? (
    <SliderSection>
      <StyledSwiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      >
        {infos.map((info) => (
          <SwiperSlide>
            <Promo info={info} key={info.id} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SliderSection>
  ) : null)
}

export default PromoList;