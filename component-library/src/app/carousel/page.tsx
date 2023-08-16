"use client"
import Carousel from "../../components/Carousel"
export default function ModalPage () {
    const images = [
        `https://www.eatingwell.com/thmb/qtP5zJfjZjS_6lkAGjOoH2XDNEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mineral-water-8cc11cec12c7471bac9378fa9757c83f.jpg`,
        `https://www.realsimple.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg`,
        `https://www.watercalculator.org/wp-content/uploads/2017/08/twenty20_ddccbd6c-7b3d-4828-b62f-09ec4ca7258c.jpg`,
      ];
    return (
        <>
        <Carousel images={images}/>
        </>
    )
}