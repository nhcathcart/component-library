"use client"
import Carousel from "../../components/Carousel"
export default function ModalPage () {
    const images = [
        `https://www.eatingwell.com/thmb/qtP5zJfjZjS_6lkAGjOoH2XDNEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mineral-water-8cc11cec12c7471bac9378fa9757c83f.jpg`,
        `https://www.realsimple.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg`,
        `https://www.watercalculator.org/wp-content/uploads/2017/08/twenty20_ddccbd6c-7b3d-4828-b62f-09ec4ca7258c.jpg`,
        `https://mail.google.com/mail/u/0?ui=2&ik=0b2484a190&attid=0.1.1&permmsgid=msg-f:1774507717464858345&th=18a0515e06ae9ee9&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8qZJMoz9aMMshIRVj9hucdGIDtaxjqOl0FYliDitMJEhHFFhC54sVD27DEQ_w5pOYeEtaT1jIKZ-ILqBTwD8ENfbTsd_ZnKeoSQPkMEX6sv-LnBLfzlQj_OPg&disp=emb`,
        `https://mail.google.com/mail/u/0?ui=2&ik=0b2484a190&attid=0.1.2&permmsgid=msg-f:1774507717464858345&th=18a0515e06ae9ee9&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9mCcS1ZqaXjbK-szHzFjim-Y5wzgqHJ2j8Nu3mUYakCejos3I6RuUtRpLBSxe82SA-033wU6UwTOH92P5Ijn9lUwt37Bv_z6w2Uh8wUcDwzoNl6PMehEJ_NUc&disp=emb`,
      ];
    return (
        <>
        <Carousel images={images}/>
        </>
    )
}